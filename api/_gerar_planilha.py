from http.server import BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlsplit

from gerar_planilha_dropshipping import (
    PREVIEW_NAME,
    WORKBOOK_NAME,
    build_workbook,
    create_preview_image,
    save_workbook,
)


TMP_DIR = Path("/tmp")
WORKBOOK_PATH = TMP_DIR / WORKBOOK_NAME
PREVIEW_PATH = TMP_DIR / PREVIEW_NAME


def load_workbook_bytes() -> bytes:
    if not WORKBOOK_PATH.exists():
        workbook = build_workbook()
        save_workbook(workbook, WORKBOOK_PATH)
    return WORKBOOK_PATH.read_bytes()


def load_preview_bytes() -> bytes:
    if not PREVIEW_PATH.exists():
        create_preview_image(PREVIEW_PATH)
    return PREVIEW_PATH.read_bytes()


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self._dispatch(include_body=True)

    def do_HEAD(self):
        self._dispatch(include_body=False)

    def _dispatch(self, include_body: bool) -> None:
        request = urlsplit(self.path)
        path = unquote(request.path).rstrip("/") or "/"
        route = parse_qs(request.query).get("route", [""])[0]

        if route == "workbook" or path in {"/api/gerar_planilha", "/api/gerar-planilha", "/api/download"}:
            self._send_workbook(include_body)
            return
        if route == "preview" or path in {"/api/preview", "/api/preview.png"}:
            self._send_preview(include_body)
            return
        if path in {"/api", "/api/status"}:
            self._send_status(include_body)
            return

        self.send_error(404, "Rota nao encontrada")

    def _send_status(self, include_body: bool) -> None:
        payload = (
            b'{"ok":true,"service":"dropshipping-workbook",'
            b'"routes":["/api/gerar-planilha","/api/preview"]}'
        )
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()

        if include_body:
            self.wfile.write(payload)

    def _send_workbook(self, include_body: bool) -> None:
        try:
            payload = load_workbook_bytes()
        except Exception as exc:
            self.send_error(500, f"Falha ao gerar planilha: {exc}")
            return

        self.send_response(200)
        self.send_header(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        )
        self.send_header("Content-Disposition", f'attachment; filename="{WORKBOOK_NAME}"')
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "private, max-age=300")
        self.end_headers()

        if include_body:
            self.wfile.write(payload)

    def _send_preview(self, include_body: bool) -> None:
        try:
            payload = load_preview_bytes()
        except Exception as exc:
            self.send_error(500, f"Falha ao gerar previa: {exc}")
            return

        if not payload:
            self.send_error(404, "Rota nao encontrada")
            return

        self.send_response(200)
        self.send_header("Content-Type", "image/png")
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "private, max-age=300")
        self.end_headers()

        if include_body:
            self.wfile.write(payload)
