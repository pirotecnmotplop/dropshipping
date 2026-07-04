# dropshipping

Gera uma planilha Excel profissional para planejamento de dropshipping no Brasil.

## Como executar

Se o ambiente virtual ja existir:

```bash
.venv/bin/python gerar_planilha_dropshipping.py
```

Para recriar o ambiente do zero:

```bash
python -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python gerar_planilha_dropshipping.py
```

## Aplicacao web

O painel web combina frontend e backend Python. A interface inclui filtros de produtos, comparativo de fornecedores, calculadora de margem, cronograma, riscos, checklist com salvamento local e exportação CSV.

No Vercel, a rota `/api/gerar-planilha` gera e entrega o Excel pelo backend. A rota `/api/preview` gera a previa visual em PNG.

## Deploy no Vercel

O arquivo `api/index.py` expoe o handler Python em um dos nomes convencionais do Vercel. O `pyproject.toml` tambem define `tool.vercel.entrypoint`, e `vercel.json` registra as rotas dinamicas da API.

No Vercel, mantenha o framework como `Other`, sem build command e com output directory vazio ou `.`.

## Saida local

Ao executar o gerador localmente, os arquivos gerados ficam em `outputs/`:

- `planejamento_dropshipping_brasil_melhorado.xlsx`
- `dashboard_preview.png`
