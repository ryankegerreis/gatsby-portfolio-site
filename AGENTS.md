# AGENTS.md

## Processes

- Always shut down background processes you started once the task that needed them is done. Don't leave `gatsby develop`, build watchers, or other long-running servers running after you finish.
- Before starting a dev server, check whether one is already running (`lsof -nP -iTCP:8000 -sTCP:LISTEN`). A stale server holding port 8000 makes Gatsby silently fall back to 8001, which breaks anything expecting the default port.
