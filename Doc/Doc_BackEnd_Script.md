# Backend Project Tree Creation Script

Here are scripts to automatically create the complete backend project structure:

## 1. **Bash Script (Linux/macOS)**

### create-backend-structure.sh
```bash
#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Creating Virtual Patient Backend Project Structure...${NC}"

# Root directory
ROOT_DIR="BackEnd"

# Create root directory
mkdir -p $ROOT_DIR
cd $ROOT_DIR

echo -e "${GREEN}Created root directory: $ROOT_DIR${NC}"

# Create main directories
mkdir -p src/auth/strategies
mkdir -p src/auth/guards
mkdir -p src/auth/dto

mkdir -p src/users/dto

mkdir -p src/scenarios/dto

mkdir -p src/sessions/dto

mkdir -p src/orders/dto

mkdir -p src/medical/dto

mkdir -p src/assessment/engines
mkdir -p src/assessment/dto

mkdir -p src/llm/prompts
mkdir -p src/llm/dto

mkdir -p src/real-time/dto

mkdir -p src/database

mkdir -p src/common/decorators
mkdir -p src/common/filters
mkdir -p src/common/interceptors
mkdir -p src/common/pipes
mkdir -p src/common/utils

mkdir -p prisma
mkdir -p test
mkdir -p docker

echo -e "${GREEN}Created all directory structure${NC}"

# Create basic files
touch src/main.ts
touch src/app.module.ts

touch src/auth/auth.module.ts
touch src/auth/auth.service.ts
touch src/auth/auth.controller.ts
touch src/auth/strategies/jwt.strategy.ts
touch src/auth/guards/jwt-auth.guard.ts

touch src/users/users.module.ts
touch src/users/users.service.ts
touch src/users/users.controller.ts

touch src/scenarios/scenarios.module.ts
touch src/scenarios/scenarios.service.ts
touch src/scenarios/scenarios.controller.ts

touch src/sessions/sessions.module.ts
touch src/sessions/sessions.service.ts
touch src/sessions/sessions.controller.ts

touch src/orders/orders.module.ts
touch src/orders/orders.service.ts
touch src/orders/orders.controller.ts

touch src/medical/medical.module.ts
touch src/medical/medical.service.ts
touch src/medical/medical.controller.ts

touch src/assessment/assessment.module.ts
touch src/assessment/assessment.service.ts
touch src/assessment/assessment.controller.ts

touch src/llm/llm.module.ts
touch src/llm/llm.service.ts
touch src/llm/llm.controller.ts

touch src/real-time/real-time.module.ts
touch src/real-time/real-time.gateway.ts
touch src/real-time/real-time.service.ts

touch src/database/database.module.ts
touch src/database/prisma.service.ts

echo -e "${GREEN}Created all module files${NC}"

# Create configuration files
touch .env
touch .env.example
touch .gitignore
touch README.md
touch package.json
touch tsconfig.json
touch tsconfig.build.json
touch nest-cli.json
touch docker-compose.dev.yml
touch docker-compose.prod.yml

# Create Prisma files
touch prisma/schema.prisma
touch prisma/seed.ts

echo -e "${GREEN}Created all configuration files${NC}"

# Create the shared-types symlink (if exists)
if [ -d "../shared-types" ]; then
    ln -s ../shared-types shared-types
    echo -e "${GREEN}Created symlink to shared-types${NC}"
fi

echo -e "${GREEN}🎉 Backend project structure created successfully!${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. cd $ROOT_DIR"
echo -e "2. npm init -y"
echo -e "3. Install dependencies from package.json"
echo -e "4. npx prisma generate"
echo -e "5. npm run start:dev"
```

## 2. **PowerShell Script (Windows)**

### create-backend-structure.ps1
```powershell
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
```

## 3. **Node.js Script (Cross-platform)**

### create-backend.js
```javascript
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Creating Virtual Patient Backend Project Structure...');

// Root directory
const ROOT_DIR = 'BackEnd';

// Create directory function
function createDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`✅ Created directory: ${dirPath}`);
    }
}

// Create file function
function createFile(filePath, content = '') {
    const dir = path.dirname(filePath);
    createDir(dir);
    
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Created file: ${filePath}`);
    }
}

// Create root directory
createDir(ROOT_DIR);
process.chdir(ROOT_DIR);

// Directory structure
const directories = [
    'src/auth/strategies',
    'src/auth/guards',
    'src/auth/dto',
    'src/users/dto',
    'src/scenarios/dto',
    'src/sessions/dto',
    'src/orders/dto',
    'src/medical/dto',
    'src/assessment/engines',
    'src/assessment/dto',
    'src/llm/prompts',
    'src/llm/dto',
    'src/real-time/dto',
    'src/database',
    'src/common/decorators',
    'src/common/filters',
    'src/common/interceptors',
    'src/common/pipes',
    'src/common/utils',
    'prisma',
    'test',
    'docker'
];

// Create all directories
directories.forEach(dir => createDir(dir));

// Module files
const moduleFiles = [
    'src/main.ts',
    'src/app.module.ts',
    'src/auth/auth.module.ts',
    'src/auth/auth.service.ts',
    'src/auth/auth.controller.ts',
    'src/auth/strategies/jwt.strategy.ts',
    'src/auth/guards/jwt-auth.guard.ts',
    'src/users/users.module.ts',
    'src/users/users.service.ts',
    'src/users/users.controller.ts',
    'src/scenarios/scenarios.module.ts',
    'src/scenarios/scenarios.service.ts',
    'src/scenarios/scenarios.controller.ts',
    'src/sessions/sessions.module.ts',
    'src/sessions/sessions.service.ts',
    'src/sessions/sessions.controller.ts',
    'src/orders/orders.module.ts',
    'src/orders/orders.service.ts',
    'src/orders/orders.controller.ts',
    'src/medical/medical.module.ts',
    'src/medical/medical.service.ts',
    'src/medical/medical.controller.ts',
    'src/assessment/assessment.module.ts',
    'src/assessment/assessment.service.ts',
    'src/assessment/assessment.controller.ts',
    'src/llm/llm.module.ts',
    'src/llm/llm.service.ts',
    'src/llm/llm.controller.ts',
    'src/real-time/real-time.module.ts',
    'src/real-time/real-time.gateway.ts',
    'src/real-time/real-time.service.ts',
    'src/database/database.module.ts',
    'src/database/prisma.service.ts'
];

// Create all module files
moduleFiles.forEach(file => createFile(file));

// Configuration files
const configFiles = [
    '.env',
    '.env.example',
    '.gitignore',
    'README.md',
    'package.json',
    'tsconfig.json',
    'tsconfig.build.json',
    'nest-cli.json',
    'docker-compose.dev.yml',
    'docker-compose.prod.yml',
    'prisma/schema.prisma',
    'prisma/seed.ts'
];

configFiles.forEach(file => createFile(file));

// Create basic package.json content
const packageJson = {
    name: "BackEnd",
    version: "1.0.0",
    description: "Backend for Virtual Patient Training Platform",
    scripts: {
        "build": "nest build",
        "start": "nest start",
        "start:dev": "nest start --watch",
        "start:debug": "nest start --debug --watch",
        "start:prod": "node dist/main",
        "db:generate": "prisma generate",
        "db:push": "prisma db push",
        "db:seed": "tsx prisma/seed.ts",
        "docker:dev": "docker-compose -f docker-compose.dev.yml up -d"
    }
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

// Create basic tsconfig.json
const tsconfig = {
    compilerOptions: {
        module: "commonjs",
        target: "ES2022",
        outDir: "./dist",
        baseUrl: "./",
        experimentalDecorators: true,
        emitDecoratorMetadata: true
    }
};

fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));

// Create basic .gitignore
const gitignore = `
node_modules/
dist/
.env
.DS_Store
*.log
`;

fs.writeFileSync('.gitignore', gitignore);

// Create basic README.md
const readme = `
# Virtual Patient Backend

Backend for the Virtual Patient Training Platform.

## Setup

1. Install dependencies: \`npm install\`
2. Set up database: \`npx prisma generate\`
3. Start development: \`npm run start:dev\`

## Project Structure

- \`src/auth/\` - Authentication and authorization
- \`src/users/\` - User management
- \`src/scenarios/\` - Medical scenario management
- \`src/sessions/\` - Training session management
- \`src/orders/\` - Medical orders system
- \`src/medical/\` - Medical knowledge base
- \`src/assessment/\` - Assessment and scoring
- \`src/llm/\` - LLM integration
- \`src/real-time/\` - WebSocket communication
`;

fs.writeFileSync('README.md', readme);

console.log('🎉 Backend project structure created successfully!');
console.log('\n📋 Next steps:');
console.log('1. cd BackEnd');
console.log('2. npm install (install dependencies)');
console.log('3. npx prisma generate');
console.log('4. npm run start:dev');
```

## 4. **Usage Instructions**

### For Linux/macOS:
```bash
# Make the script executable
chmod +x create-backend-structure.sh

# Run the script
./create-backend-structure.sh
```

### For Windows:
```powershell
# Run the PowerShell script
.\create-backend-structure.ps1
```

### For Node.js (Cross-platform):
```bash
# Run the Node.js script
node create-backend.js
```

## 5. **Quick One-liner Commands**

### Bash one-liner:
```bash
mkdir -p BackEnd/{src/{auth/{strategies,guards,dto},users/dto,scenarios/dto,sessions/dto,orders/dto,medical/dto,assessment/{engines,dto},llm/{prompts,dto},real-time/dto,database,common/{decorators,filters,interceptors,pipes,utils}},prisma,test,docker} && echo "✅ Structure created"
```

### PowerShell one-liner:
```powershell
$dirs = "src/auth/strategies", "src/auth/guards", "src/auth/dto", "src/users/dto", "src/scenarios/dto", "src/sessions/dto", "src/orders/dto", "src/medical/dto", "src/assessment/engines", "src/assessment/dto", "src/llm/prompts", "src/llm/dto", "src/real-time/dto", "src/database", "src/common/decorators", "src/common/filters", "src/common/interceptors", "src/common/pipes", "src/common/utils", "prisma", "test", "docker"; $dirs | ForEach-Object { New-Item -ItemType Directory -Path "BackEnd/$_" -Force }; Write-Host "✅ Structure created"
```

Choose the script that works best for your operating system. The Node.js version is the most cross-platform compatible.