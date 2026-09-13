# Running with Docker

This project can be run entirely in Docker containers using the
provided `docker-compose.yml` and `Dockerfile`.

## Prerequisites

- Docker Engine 20.10 or newer
- Docker Compose V2 (`docker compose`)

## Start everything

From the repository root:

```bash
docker compose up --build
```

`--build` rebuilds every service image on first run and picks up any
source changes.

## Access points

| Service           | Port | Description                        |
| ----------------- | ---- | ---------------------------------- |
| Root config       | 9000 | Single-spa shell + SystemJS        |
| API server        | 3001 | Mock analytics/dashboard endpoints |
| Auth MFE          | 9002 | Login screen                       |
| Dashboard MFE     | 9003 | Dashboard                          |
| Profile MFE       | 9004 | Profile & settings                 |
| Analytics MFE     | 9005 | Analytics screens                  |
| Notifications MFE | 9006 | Notifications                      |
| Calendar MFE      | 9007 | Calendar                           |

Open http://localhost:9000 in your browser.

## Stop and remove

```bash
docker compose down
```

## Notes

- Each MFE uses webpack-dev-server, so bundles are served from their
  dev ports and loaded by the root config's SystemJS import map.
- The API server runs the mock Express app from `api-server/server.js`.
- Source changes are live-reloaded inside each container because the
  working directory is mounted into the image.
