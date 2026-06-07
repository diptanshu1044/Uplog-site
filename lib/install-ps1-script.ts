export const INSTALL_PS1_SCRIPT = `$ErrorActionPreference = "Stop"

$Repo = "diptanshu1044/uplog"
$Filename = "uplog-windows-x86_64.exe"
$InstallDir = Join-Path $env:LOCALAPPDATA "Programs\\uplog"

$Version = (Invoke-RestMethod "https://api.github.com/repos/$Repo/releases/latest").tag_name
if (-not $Version) {
  Write-Error "Could not determine latest version."
}

$Url = "https://github.com/$Repo/releases/download/$Version/$Filename"

Write-Host "Downloading uplog $Version ($Filename)..."
New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
$Dest = Join-Path $InstallDir "uplog.exe"
Invoke-WebRequest -Uri $Url -OutFile $Dest -UseBasicParsing

$UserPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($UserPath -notlike "*$InstallDir*") {
  [Environment]::SetEnvironmentVariable("Path", "$UserPath;$InstallDir", "User")
  $env:Path = "$env:Path;$InstallDir"
}

Write-Host "uplog $Version installed successfully."
Write-Host "Run: uplog --version"
`;
