# ADR 0004 Preferir sites estaticos e conteudo separado

- Estado: Proposta
- Data: 2026-11-02
- Responsavel: Eduardo

## Contexto

As primeiras paginas servirao principalmente para apresentar informacoes e direcionar contato. Um backend adicionaria operacao e risco antes de existir uma necessidade concreta.

## Decisao

Preferir geracao estatica e separar conteudo do codigo. A escolha de framework, hospedagem e formato de configuracao fica para um ADR tecnico depois do wireframe e dos requisitos finais.

## Alternativas consideradas

- CMS com banco de dados desde a primeira versao.
- Paginas HTML totalmente independentes e sem componentes.
- Plataforma multiusuario antes das primeiras entregas.

## Consequencias

A solucao tende a ser simples, rapida e exportavel. Edicao por clientes, formularios, autenticacao e dados dinamicos exigirao decisoes adicionais quando se tornarem necessarios.

## Evidencias e premissas

O plano de origem recomenda React e TypeScript com geracao estatica, mas a stack ainda nao foi aceita. O requisito aceito por enquanto e evitar backend sem necessidade.

## Revisao

Revisar ao escolher a stack da pagina institucional ou quando surgir um requisito dinamico comprovado.
