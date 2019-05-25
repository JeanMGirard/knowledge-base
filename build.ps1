Remove-Item -Path .\README.md
New-Item -Path .\README.md

Get-Content .\build-order.yml | ForEach-Object {
    gc .\$_ | Add-Content -Path .\README.md
}

