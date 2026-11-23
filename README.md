# Loja Ágil Web

Frontend SPA da Loja Ágil em React 19 + TypeScript estrito, construído aula a aula com arquitetura em sete camadas.

## Como rodar em desenvolvimento

Pré-requisitos: Docker e Docker Compose.

```bash
docker compose up -d
docker compose exec dev pnpm install
docker compose exec dev pnpm dev
```

## Verificações (iguais às da CI)

```bash
docker compose exec dev sh -c "pnpm format:check && pnpm lint && pnpm typecheck && pnpm test && pnpm build"
```

## Documentação

- [Decisões de arquitetura (ADRs)](docs/adr/README.md)
- [Glossário](docs/glossary.md)
- [Mapa das camadas](docs/architecture-map.md)
