# sharedlinks

A minimal Node.js HTTP server.

## Run locally

```bash
npm start
```

Server defaults to port `3000`.

## Endpoints

- `GET /health` → returns `{ "status": "ok" }`
- `GET /` (or any other path) → returns request info
