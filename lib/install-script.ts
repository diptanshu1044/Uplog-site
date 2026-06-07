export const INSTALL_SCRIPT = `#!/bin/sh
set -e

REPO="diptanshu1044/uplog"
BINARY="uplog"
INSTALL_DIR="/usr/local/bin"

# Detect OS
OS="$(uname -s)"
ARCH="$(uname -m)"

case "$OS" in
  Linux)
    case "$ARCH" in
      x86_64)  TARGET="x86_64-unknown-linux-gnu" ;;
      aarch64) TARGET="aarch64-unknown-linux-gnu" ;;
      *)       echo "Unsupported architecture: $ARCH"; exit 1 ;;
    esac
    EXT="tar.gz"
    ;;
  Darwin)
    case "$ARCH" in
      x86_64)  TARGET="x86_64-apple-darwin" ;;
      arm64)   TARGET="aarch64-apple-darwin" ;;
      *)       echo "Unsupported architecture: $ARCH"; exit 1 ;;
    esac
    EXT="tar.gz"
    ;;
  *)
    echo "Unsupported OS: $OS"
    exit 1
    ;;
esac

# Get latest release tag from GitHub API
VERSION="$(curl -fsSL "https://api.github.com/repos/$REPO/releases/latest" \\
  | grep '"tag_name"' \\
  | sed 's/.*"tag_name": "\\(.*\\)".*/\\1/')"

if [ -z "$VERSION" ]; then
  echo "Could not determine latest version."
  exit 1
fi

FILENAME="\${BINARY}-\${TARGET}.\${EXT}"
URL="https://github.com/$REPO/releases/download/$VERSION/$FILENAME"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "Downloading uplog $VERSION for $TARGET..."
curl -fsSL "$URL" -o "$TMP/$FILENAME"

echo "Installing to $INSTALL_DIR..."
tar -xzf "$TMP/$FILENAME" -C "$TMP"
install -m 755 "$TMP/$BINARY" "$INSTALL_DIR/$BINARY"

echo "uplog $VERSION installed successfully."
echo "Run: uplog --version"
`;
