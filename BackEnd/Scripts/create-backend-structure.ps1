# Virtual Patient Backend Project Structure Creator
Write-Host "Creating Virtual Patient Backend Project Structure..." -ForegroundColor Yellow

# Root directory
$ROOT_DIR = "BackEnd"

# Create root directory
New-Item -ItemType Directory -Path $ROOT_DIR -Force
Set-Location $ROOT_DIR

Write-Host "Created root directory: $ROOT_DIR" -ForegroundColor Green

# Create main directories
$directories = @(
    "src/auth/strategies",
    "src/auth/guards",
    "src/auth/dto",
    "src/users/dto",
    "src/scenarios/dto",
    "src/sessions/dto",
    "src/orders/dto",
    "src/medical/dto",
    "src/assessment/engines",
    "src/assessment/dto",
    "src/llm/prompts",
    "src/llm/dto",
    "src/real-time/dto",
    "src/database",
    "src/common/decorators",
    "src/common/filters",
    "src/common/interceptors",
    "src/common/pipes",
    "src/common/utils",
    "prisma",
    "test",
    "docker"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Path $dir -Force
}

Write-Host "Created all directory structure" -ForegroundColor Green

# Create basic files
$files = @(
    "src/main.ts",
    "src/app.module.ts",
    "src/auth/auth.module.ts",
    "src/auth/auth.service.ts",
    "src/auth/auth.controller.ts",
    "src/auth/strategies/jwt.strategy.ts",
    "src/auth/guards/jwt-auth.guard.ts",
    "src/users/users.module.ts",
    "src/users/users.service.ts",
    "src/users/users.controller.ts",
    "src/scenarios/scenarios.module.ts",
    "src/scenarios/scenarios.service.ts",
    "src/scenarios/scenarios.controller.ts",
    "src/sessions/sessions.module.ts",
    "src/sessions/sessions.service.ts",
    "src/sessions/sessions.controller.ts",
    "src/orders/orders.module.ts",
    "src/orders/orders.service.ts",
    "src/orders/orders.controller.ts",
    "src/medical/medical.module.ts",
    "src/medical/medical.service.ts",
    "src/medical/medical.controller.ts",
    "src/assessment/assessment.module.ts",
    "src/assessment/assessment.service.ts",
    "src/assessment/assessment.controller.ts",
    "src/llm/llm.module.ts",
    "src/llm/llm.service.ts",
    "src/llm/llm.controller.ts",
    "src/real-time/real-time.module.ts",
    "src/real-time/real-time.gateway.ts",
    "src/real-time/real-time.service.ts",
    "src/database/database.module.ts",
    "src/database/prisma.service.ts"
)

foreach ($file in $files) {
    New-Item -ItemType File -Path $file -Force
}

Write-Host "Created all module files" -ForegroundColor Green

# Create configuration files
$configFiles = @(
    ".env",
    ".env.example",
    ".gitignore",
    "README.md",
    "package.json",
    "tsconfig.json",
    "tsconfig.build.json",
    "nest-cli.json",
    "docker-compose.dev.yml",
    "docker-compose.prod.yml",
    "prisma/schema.prisma",
    "prisma/seed.ts"
)

foreach ($file in $configFiles) {
    New-Item -ItemType File -Path $file -Force
}

Write-Host "Created all configuration files" -ForegroundColor Green

# Create the shared-types junction (if exists)
if (Test-Path "../shared-types") {
    cmd /c mklink /J "shared-types" "..\shared-types" 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Created junction to shared-types" -ForegroundColor Green
    }
}

Write-Host "🎉 Backend project structure created successfully!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. cd $ROOT_DIR"
Write-Host "2. npm init -y"
Write-Host "3. Install dependencies from package.json"
Write-Host "4. npx prisma generate"
Write-Host "5. npm run start:dev"