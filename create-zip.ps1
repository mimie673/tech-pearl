# PowerShell script to create a clean ZIP file for sharing

Write-Host "Creating TechPearl project ZIP file..." -ForegroundColor Green

# Define paths
$sourceFolder = Get-Location
$zipFileName = "TechPearl-Project.zip"
$zipPath = Join-Path $sourceFolder.Parent.FullName $zipFileName

# Files and folders to exclude
$excludeItems = @(
    "node_modules",
    "dist",
    ".git",
    ".vscode",
    "*.log",
    ".env",
    ".env.local",
    "create-zip.ps1"
)

Write-Host "Excluding: node_modules, dist, .git, logs..." -ForegroundColor Yellow

# Create temporary folder
$tempFolder = Join-Path $env:TEMP "TechPearl-Temp"
if (Test-Path $tempFolder) {
    Remove-Item $tempFolder -Recurse -Force
}
New-Item -ItemType Directory -Path $tempFolder | Out-Null

# Copy files (excluding specified items)
Write-Host "Copying files..." -ForegroundColor Cyan
Get-ChildItem -Path $sourceFolder -Recurse | Where-Object {
    $item = $_
    $shouldExclude = $false
    foreach ($exclude in $excludeItems) {
        if ($item.FullName -like "*$exclude*") {
            $shouldExclude = $true
            break
        }
    }
    -not $shouldExclude
} | ForEach-Object {
    $relativePath = $_.FullName.Substring($sourceFolder.Path.Length + 1)
    $destPath = Join-Path $tempFolder $relativePath
    
    if ($_.PSIsContainer) {
        New-Item -ItemType Directory -Path $destPath -Force | Out-Null
    } else {
        $destDir = Split-Path $destPath -Parent
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        Copy-Item $_.FullName -Destination $destPath -Force
    }
}

# Create ZIP file
Write-Host "Creating ZIP file at: $zipPath" -ForegroundColor Cyan
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}
Compress-Archive -Path "$tempFolder\*" -DestinationPath $zipPath -CompressionLevel Optimal

# Cleanup
Remove-Item $tempFolder -Recurse -Force

Write-Host "`nZIP file created successfully!" -ForegroundColor Green
Write-Host "Location: $zipPath" -ForegroundColor Yellow
Write-Host "`nYou can now share this ZIP file with your friends." -ForegroundColor Green
Write-Host "The ZIP includes SETUP_INSTRUCTIONS.md with step-by-step setup guide." -ForegroundColor Cyan

# Get ZIP file size
$zipSize = (Get-Item $zipPath).Length / 1MB
Write-Host ("File size: {0:N2} MB" -f $zipSize) -ForegroundColor Yellow

Write-Host "`nPress any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
