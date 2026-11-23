#!/usr/bin/env bash
set -e

# Clean stale build cache to prevent hash mismatches
rm -rf node_modules/.nitro .nitro .output

if ! command -v bun >/dev/null 2>&1; then
  if [ -x "$HOME/.bun/bin/bun" ]; then
    export PATH="$HOME/.bun/bin:$PATH"
  else
    echo "Installing Bun for OG and sitemap generation..."
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
  fi
fi

bun scripts/generate-og.ts
bun scripts/generate-sitemap.ts
