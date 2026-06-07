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
      x86_64)  FILENAME="uplog-linux-x86_64" ;;
      aarch64) FILENAME="uplog-linux-aarch64" ;;
      *)       echo "Unsupported architecture: $ARCH"; exit 1 ;;
    esac
    ;;
  Darwin)
    case "$ARCH" in
      x86_64)  FILENAME="uplog-macos-x86_64" ;;
      arm64)   FILENAME="uplog-macos-aarch64" ;;
      *)       echo "Unsupported architecture: $ARCH"; exit 1 ;;
    esac
    ;;
  MINGW*|MSYS*|CYGWIN*)
    FILENAME="uplog-windows-x86_64.exe"
    BINARY="uplog.exe"
    INSTALL_DIR="$HOME/.local/bin"
    ;;
  *)
    echo "Unsupported OS: $OS"
    echo "Available binaries:"
    echo "  uplog-linux-x86_64"
    echo "  uplog-linux-aarch64"
    echo "  uplog-macos-x86_64"
    echo "  uplog-macos-aarch64"
    echo "  uplog-windows-x86_64.exe"
    echo ""
    echo "On Windows, use: irm https://uplog.in/install.ps1 | iex"
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

URL="https://github.com/$REPO/releases/download/$VERSION/$FILENAME"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "Downloading uplog $VERSION ($FILENAME)..."
curl -fsSL "$URL" -o "$TMP/$BINARY"

echo "Installing to $INSTALL_DIR..."
mkdir -p "$INSTALL_DIR"
install -m 755 "$TMP/$BINARY" "$INSTALL_DIR/$BINARY"

echo "uplog $VERSION installed successfully."
echo "Run: $BINARY --version"
`;
