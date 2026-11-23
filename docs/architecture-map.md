# Mapa das camadas

As sete camadas de `src/` e em que módulo cada uma ganha vida. Quem pode importar de quem é decidido e verificado no lint no módulo 02.

| Camada     | Responsabilidade                                                               | Estado                                  |
| ---------- | ------------------------------------------------------------------------------ | --------------------------------------- |
| `core`     | Regras puras, cliente HTTP, cache, stores, schemas. Não conhece React de tela. | Iniciada no módulo 01 (`core/utils.ts`) |
| `ui`       | Componentes visuais genéricos do design system.                                | Módulo 02                               |
| `pattern`  | Padrões compostos reutilizáveis (formulários, data grid, boundaries).          | Módulo 07                               |
| `layouts`  | Molduras de página (cabeçalho, menu, área de conteúdo).                        | Módulo 06                               |
| `features` | Telas e regras de cada parte do negócio (produtos, pedidos…).                  | Módulo 02                               |
| `routes`   | Rotas da aplicação: ligam URL, layout e feature.                               | Módulo 06                               |
| `mocks`    | API simulada com MSW, para desenvolvimento e testes.                           | Módulo 04                               |
