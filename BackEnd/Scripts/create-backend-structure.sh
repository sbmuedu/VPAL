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