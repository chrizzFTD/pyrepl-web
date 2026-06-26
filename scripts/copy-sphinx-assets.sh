#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/sphinx/sphinxcontrib/pyrepl_web/static"

cd "$ROOT"
export PATH="${HOME}/.bun/bin:${PATH}"

bun install
bun run build

mkdir -p "$DEST"
cp dist/*.js "$DEST/"
cp sphinx/sphinxcontrib/pyrepl_web/static/pyrepl-docs.css "$DEST/" 2>/dev/null || true

echo "Copied JS assets to $DEST"
