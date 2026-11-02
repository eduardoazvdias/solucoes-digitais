# Workflow futuro de geracao de sites

Este documento define uma direcao, nao uma especificacao pronta para implementacao.

## Objetivo

Reduzir trabalho repetitivo entre briefing e publicacao sem transformar clientes diferentes em paginas indistinguiveis e sem remover revisao humana das decisoes importantes.

## Fluxo proposto

1. Selecionar publico, tipo de pagina e objetivo principal.
2. Coletar briefing estruturado, materiais e autorizacoes.
3. Validar campos obrigatorios, limites e pendencias.
4. Recomendar estrutura e variantes de secoes.
5. Gerar configuracao de conteudo e identidade.
6. Produzir previa privada e nao indexada.
7. Executar verificacoes automaticas de qualidade.
8. Fazer revisao humana de conteudo, identidade e coerencia.
9. Receber revisao consolidada do cliente.
10. Aprovar, publicar, versionar e registrar acessos.
11. Verificar dominio, HTTPS, links e medicao.
12. Manter versao restauravel e historico da entrega.

## Automacoes candidatas

- transformacao do briefing em configuracao tipada;
- verificacao de campos, links e dimensoes de imagens;
- montagem de previa por regras;
- criacao de checklist por tipo de entrega;
- testes de acessibilidade e responsividade;
- publicacao e rollback;
- registro de versao e metadados da entrega.

## Revisao humana obrigatoria

- exatidao e tom do conteudo;
- adequacao ao publico;
- direitos de uso de marca e imagens;
- coerencia da composicao;
- promessas comerciais;
- aprovacao final e ativacao.

## Modelo de templates que evita genericidade

Um template deve combinar quatro camadas:

1. Estrategia: objetivo, jornada e ordem das informacoes.
2. Conteudo: campos e orientacoes proprios do segmento.
3. Composicao: variantes compativeis e regras de densidade.
4. Marca: tokens visuais, imagens e detalhes distintivos.

Variar apenas a camada de marca nao e suficiente. A geracao deve permitir omitir, reordenar ou substituir secoes segundo evidencias do contexto, dentro de limites testados.

## Dados minimos por projeto

- identificador e status;
- publico e objetivo;
- conteudo aprovado;
- identidade e ativos autorizados;
- template e variantes escolhidas;
- dominio e destino de contato;
- versao publicada;
- checklist e aprovacao;
- responsavel e historico de alteracoes.

## Condicoes para iniciar a implementacao

- pelo menos duas entregas comparaveis concluidas;
- campos recorrentes identificados;
- excecoes documentadas;
- tempo por etapa medido;
- criterio claro para o que permanece manual.
