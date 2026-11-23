# ADR 0001 · Stack base, TypeScript estrito, lint e contêiner de desenvolvimento

- **Status:** Aceita
- **Data:** 22/11/2026

## Contexto

O frontend da Loja Ágil Web precisa de build rápido, tipagem estrita sem regressões, padronização de código desde o primeiro commit e ambiente idêntico entre a máquina do aluno e a CI (incluindo Chromium para testes de navegador).

## Decisão

1. **Runtime e pacotes:** contêiner baseado em `mcr.microsoft.com/playwright:v1.65.1-noble` com `pnpm@10.33.0`.
2. **Base:** React 19, Vite 8 e TypeScript `~6.0` em modo estrito (`noUncheckedIndexedAccess`, sem `baseUrl` depreciado) com path aliases (`@/*`, `@core/*`, `@ui/*`, `@pattern/*`, `@layouts/*`, `@features/*`, `@routes/*`, `@mocks/*`).
3. **Qualidade:** `oxlint` + ESLint (`typescript-eslint` + `eslint-plugin-oxlint`), Prettier e Vitest 5 com projetos separados (`unit` e `integration`).
4. **Fluxo:** GitHub Flow com `main` protegida, squash merge, Dependabot e pipeline de CI desde o módulo 01.

## Consequências

- Qualquer violação de tipo, formatação, lint ou teste bloqueia o PR antes do merge.
- O `typescript` fica fixado em `~6.0.0` até o `typescript-eslint` suportar o TypeScript 7.0.
