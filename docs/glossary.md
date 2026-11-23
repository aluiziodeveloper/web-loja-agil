# Glossário · Linguagem Ubíqua

Cada termo entra no checkpoint do módulo em que foi definido.

## Módulos 00 e 01

| Termo                            | Significado no projeto                                                                                                                       |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **SPA**                          | _Single Page Application_: aplicação que carrega um único `index.html` e, depois disso, troca de tela no navegador buscando só dados (JSON). |
| **Camada**                       | Pasta de `src/` com uma responsabilidade única e regras sobre de quem pode importar (veja o [mapa](architecture-map.md)).                    |
| **Server state**                 | Dado que pertence ao servidor e do qual a SPA guarda só uma cópia em cache.                                                                  |
| **Client state**                 | Dado que nasce e vive no navegador: preferências, sessão, estado de interface.                                                               |
| **Contêiner de desenvolvimento** | Ambiente Docker com Node, `pnpm` e Chromium idênticos para todos os alunos e para a CI.                                                      |
| **Volume nomeado**               | Pasta guardada pelo Docker fora do projeto; mantém o `node_modules` do contêiner separado do da sua máquina.                                 |
| **Vite**                         | Servidor de desenvolvimento e empacotador: serve os módulos ES direto ao navegador em dev e gera o build otimizado.                          |
| **HMR**                          | _Hot Module Replacement_: troca o módulo alterado no navegador sem recarregar a página nem perder o estado.                                  |
| **pnpm**                         | Gerenciador de pacotes com armazenamento compartilhado e `node_modules` estrito (só o que está no `package.json` pode ser importado).        |
| **Lockfile**                     | `pnpm-lock.yaml`: as versões exatas instaladas; com `--frozen-lockfile`, a instalação falha se ele estiver desatualizado.                    |
| **TypeScript estrito**           | `strict` e opções extras (`noUncheckedIndexedAccess`, `noUnusedLocals`…) que transformam erros prováveis em erros de compilação.             |
| **Path alias**                   | Atalho de importação (`@core/*`, `@ui/*`) definido no `paths` do `tsconfig.json`; o Vite lê com `tsconfigPaths`.                             |
| **Lint**                         | Análise estática que aponta código suspeito ou fora das regras do projeto (`oxlint` e ESLint).                                               |
| **Formatador**                   | Ferramenta que reescreve o código num estilo único (Prettier), para que a revisão discuta lógica e não espaços.                              |
| **Teste unitário**               | Teste de uma unidade isolada (função ou componente) com Vitest, rodando no `jsdom`.                                                          |
| **jsdom**                        | DOM simulado dentro do Node: permite renderizar componentes nos testes sem abrir um navegador.                                               |
| **Testing Library**              | Biblioteca que testa componentes como o usuário os vê: busca por papel e texto acessível, não por detalhes de implementação.                 |
| **jest-dom**                     | Matchers de DOM para o `expect` (`toBeInTheDocument`, `toHaveTextContent`…).                                                                 |
| **TDD**                          | Escrever o teste antes, vê-lo falhar (vermelho), fazer passar (verde) e então refatorar.                                                     |
| **Conventional Commits**         | Padrão de mensagem `tipo(escopo): descrição` usado nos commits e títulos de PR.                                                              |
| **Pull request (PR)**            | Pedido para levar o trabalho de uma branch para a `main`, com revisão e CI.                                                                  |
| **CI**                           | _Integração contínua_: pipeline que roda formatação, lint, tipos, testes e build a cada PR.                                                  |
| **Workflow (GitHub Actions)**    | Arquivo em `.github/workflows/` com os passos que o GitHub executa a cada evento, como um push ou um PR.                                     |
| **Squash merge**                 | Merge que condensa os commits da branch em um único commit na `main`.                                                                        |
| **Ruleset**                      | Regras do GitHub que protegem a `main`: só PR, CI verde e nada de push forçado.                                                              |
| **Dependabot**                   | Robô do GitHub que abre PRs para atualizar dependências.                                                                                     |
| **Tag (`aula-MM-NN`)**           | Marcação Git que aponta para o estado exato do código ao final de uma aula prática.                                                          |
| **ADR**                          | _Architecture Decision Record_: registro curto de uma decisão, com contexto, alternativas e consequências (`docs/adr/`).                     |
| **Linguagem ubíqua**             | Vocabulário único que a equipe e o código usam para os mesmos conceitos; este glossário é a fonte dele.                                      |
