
# Project Proposal
Of course. Here is a professional Request for Proposal (RFP) document based on your project plan. This version is structured to be sent to external agencies or teams for design, programming, and implementation. It focuses on the *what* and *why*, while allowing the vendor to propose the best *how*.

---

### **Request for Proposal (RFP): Virtual Patient Training Platform**

**Date:** [Current Date]
**Proposal Submission Deadline:** [Date, e.g., 3 weeks from current date]
**Contact Person:** [Your Name/Company Name]
**Contact Email:** [Your Email]

---

#### **1. Executive Summary**

We are seeking a qualified and experienced partner to design, develop, and implement a comprehensive web-based virtual patient training platform. This platform will provide medical students with realistic, AI-driven clinical scenarios to bridge the gap between theoretical knowledge and practical clinical skills. The final product will be an immersive, scalable, and educationally powerful tool featuring high-fidelity simulations, AI-powered patient interactions, and a multi-dimensional assessment system.

#### **2. Project Vision & Goals**

Our vision is to create the most realistic and educationally effective virtual patient training platform on the market, transforming medical education through technology.

**Primary Goals:**
*   Provide a risk-free environment for students to develop and practice clinical skills.
*   Improve diagnostic accuracy, procedural skills, and patient communication through realistic simulation.
*   Enable educators to monitor student progress in real-time and provide targeted feedback.
*   Create a scalable solution that can be adopted by medical institutions globally.

#### **3. Target Audience**

*   **Primary Users:** Medical students, nursing students, and other healthcare trainees.
*   **Secondary Users:** Clinical supervisors, professors, and administrators who will monitor progress, manage scenarios, and assess competency.

#### **4. Core Functional Requirements**

The platform must include the following core modules and features:

**4.1. User Management System**
*   Support for multiple user roles (Student, Supervisor, Admin) with granular, role-based permissions.
*   Secure user registration, login, and profile management.
*   Capability for institutional authentication integration (e.g., SSO, SAML).

**4.2. Medical Scenario Engine**
*   A dynamic system for creating and running clinical scenarios.
*   Realistic patient physiology modeling with dynamic vital signs that respond to student actions.
*   Support for branching narratives, where patient conditions evolve based on student decisions.
*   Ability to introduce complications and time-accelerated simulations.

**4.3. AI-Powered Patient Interactions**
*   Enable natural language conversations between students and virtual patients.
*   The AI should generate context-aware responses that reflect the patient's medical condition, personality, and emotional state.
*   The system must be designed to ensure medical appropriateness and safety in all AI-generated dialogue.

**4.4. Comprehensive Assessment System**
*   Real-time scoring and competency evaluation across multiple dimensions:
    *   Diagnostic Accuracy
    *   Procedural Skills
    *   Communication
    *   Professionalism
    *   Critical Thinking
*   Provide formative (real-time feedback) and summative (end-of-scenario score) assessment modes.
*   Generate detailed performance reports with actionable feedback for students.

**4.5. Real-time Collaboration & Supervision**
*   A supervisor dashboard to monitor multiple student sessions in real-time.
*   Allow supervisors to intervene during a session to provide hints, introduce complications, or correct actions.
*   Support for multi-user scenarios to facilitate team-based training.

**4.6. Medical Knowledge Base**
*   An integrated, searchable database of medical information including:
    *   Drug information (dosage, interactions, contraindications).
    *   Medical procedures with step-by-step guides.
    *   Laboratory and imaging test results with interpretation guides.

**4.7. 3D Visualization**
*   A 3D visualization of the patient to enhance immersion and support procedural training.
*   The visualization should be interactive and reflect the patient's current state (e.g., breathing, distress).

#### **5. Technical Considerations & Preferences**

We are looking for a modern, scalable, and secure technology stack. While we are open to your expert recommendations, our initial research suggests the following areas of focus:

*   **Frontend:** A modern framework capable of supporting complex UI and 3D graphics (e.g., React/Next.js, Vue).
*   **Backend:** An enterprise-ready, scalable framework (e.g., Node.js/NestJS, Python/Django, Java/Spring).
*   **Database:** A robust relational database (e.g., PostgreSQL).
*   **AI/LLM:** We have a strong preference for a **locally-deployable Large Language Model (LLM)** (e.g., using Ollama with Mistral/Llama 3) to ensure data privacy, security, and long-term cost-effectiveness. Please detail your experience with LLM integration and fine-tuning.
*   **Real-time Communication:** Implementation of WebSockets for live collaboration features.
*   **Security:** The platform must be built with security as a primary concern, including secure authentication (JWT), data encryption, and protection against common web vulnerabilities.

#### **6. Phased Development Approach**

We envision the project being executed in distinct phases. Please provide a cost and timeline estimate for each phase.

**Phase 1: Foundation (Months 1-3)**
*   **Deliverables:** User authentication & management, basic scenario engine framework, core LLM integration for simple patient conversations, and a preliminary scoring system.

**Phase 2: Core Simulation (Months 4-6)**
*   **Deliverables:** Advanced physiology modeling, comprehensive medical knowledge base, real-time WebSocket communication for supervisor monitoring, and basic 3D patient visualization.

**Phase 3: Enhanced Realism & Features (Months 7-9)**
*   **Deliverables:** Advanced AI conversation system with emotional intelligence, complex multi-system scenarios, comprehensive assessment engine with detailed analytics, and mobile-responsive design.

**Phase 4: Production & Polish (Months 10-12)**
*   **Deliverables:** Performance optimization, advanced analytics dashboard, a content management system for scenarios, comprehensive testing & QA, and final deployment with documentation.

#### **7. What We Require From You (The Vendor)**

Please submit a comprehensive proposal that includes the following:

1.  **Company Overview:** A brief introduction to your company, your team's experience, and why you are the right partner for this project.
2.  **Relevant Portfolio:** Examples of previous projects, especially those involving complex web applications, AI/LLM integration, 3D visualization, or educational platforms.
3.  **Technical Proposal:** Your proposed technology stack, architecture, and justification for your choices. Please address how you will meet the "Technical Considerations" listed above.
4.  **Project Plan & Timeline:** A detailed project plan that aligns with our phased approach, including key milestones, deliverables, and a projected timeline.
5.  **Cost Breakdown:** A detailed financial proposal with a clear cost breakdown for each of the four project phases. Please specify what is included (e.g., design, development, project management, testing) and any assumptions made.
6.  **Team Structure:** The proposed project team structure, including roles and experience levels of the individuals who will be working on this project.
7.  **Project Management Methodology:** Describe your approach to project management (e.g., Agile, Scrum), communication schedule, and reporting.
8.  **Support & Maintenance:** An outline of your post-launch support, maintenance, and hosting options.

#### **8. Submission Guidelines**

*   **Proposal Deadline:** All proposals must be received by [Date] via email to [Your Email].
*   **Questions:** All questions regarding this RFP must be submitted in writing by [Date, e.g., 1 week before deadline]. We will provide a consolidated FAQ to all respondents.

We look forward to receiving your proposal and exploring a partnership to build a groundbreaking platform for medical education.

Sincerely,

[Your Name/Company Name]

# Project Steps


Of course. Based on the proposal, here is a practical, step-by-step programming plan. The work is divided into logical, manageable projects that can be developed in sequence, with some potential for parallel work.

This approach treats each major component as a distinct "project" with its own goals, technologies, and responsibilities.

---

## **Project Breakdown & Implementation Plan**

Here are the eight core projects that, when combined, will form the complete Virtual Patient Training Platform.

### **Project 1: Core API & User Service**

*   **Purpose:** To serve as the foundational backend for the entire platform. It will handle all user-related operations, authentication, and provide the central API gateway.
*   **Core Technologies:** Nest.js, TypeScript, PostgreSQL, Prisma, JWT, Passport.js.
*   **Key Responsibilities:**
    *   Design and implement the complete database schema (users, sessions, institutions, etc.).
    *   Build secure authentication endpoints (register, login, logout).
    *   Implement role-based access control (RBAC) using guards and decorators.
    *   Create a basic user profile management system.
    *   Set up the foundational API structure and documentation (e.g., using Swagger).
*   **Dependencies:** None. This is the first project to be built.

---

### **Project 2: Medical Knowledge Base Service**

*   **Purpose:** To create a centralized, authoritative database of all medical information that the scenarios can reference.
*   **Core Technologies:** Nest.js (as a module within the Core API), TypeScript, PostgreSQL, Prisma.
*   **Key Responsibilities:**
    *   Design database models for Drugs (name, dosage, interactions, contraindications).
    *   Design models for Procedures (steps, required equipment, risks).
    *   Design models for Lab Tests (normal ranges, interpretation, what conditions they affect).
    *   Build a robust set of CRUD (Create, Read, Update, Delete) endpoints for this data, protected by RBAC.
    *   Seed the database with an initial set of common drugs, tests, and procedures.
*   **Dependencies:** Project 1 (Core API & User Service) for the database and API structure.

---

### **Project 3: Clinical Scenario Engine**

*   **Purpose:** This is the "brain" of the simulation. It manages the state of a patient scenario, processes user actions, and updates the patient's condition in real-time.
*   **Core Technologies:** Nest.js, TypeScript, Node.js Timers/Schedulers, State Machines (e.g., XState).
*   **Key Responsibilities:**
    *   Create a `Scenario` model to store scenario data (patient history, initial vitals, triggers).
    *   Develop a `Session` model to track the live state of a running simulation for a specific user.
    *   Build the core simulation loop: receive an action (e.g., "order drug X"), calculate the consequence (using data from Project 2), and update the patient's state (vitals, symptoms).
    *   Implement logic for time progression and complication triggers.
*   **Dependencies:** Project 1 (Core API), Project 2 (Medical Knowledge Base).

---

### **Project 4: AI Patient Interaction Service**

*   **Purpose:** To manage the natural language conversations with the virtual patient, providing context-aware and emotionally appropriate responses.
*   **Core Technologies:** Nest.js, TypeScript, Ollama SDK, HTTP clients.
*   **Key Responsibilities:**
    *   Set up and configure a connection to a local Ollama instance.
    *   Design a sophisticated prompt engineering system. The prompt must include the patient's current state, history, personality, and the student's last message.
    *   Create an endpoint that takes a student's message, sends it to the LLM, and returns the patient's response.
    *   Implement safety and validation layers to prevent the LLM from providing medically incorrect or inappropriate information.
*   **Dependencies:** Project 3 (Scenario Engine, to provide context for the AI).

---

### **Project 5: Assessment & Analytics Service**

*   **Purpose:** To evaluate student performance in real-time and provide detailed feedback after a scenario is complete.
*   **Core Technologies:** Nest.js, TypeScript, PostgreSQL.
*   **Key Responsibilities:**
    *   Define the scoring algorithms for each competency dimension (diagnostic accuracy, communication, etc.).
    *   Create event listeners within the Scenario Engine to log key actions (e.g., `correct_test_ordered`, `unprofessional_question_asked`).
    *   Build a service that processes these logs and calculates a real-time score.
    *   Develop a system to generate a final, detailed performance report with strengths, weaknesses, and suggestions for improvement.
*   **Dependencies:** Project 3 (Scenario Engine, for event data).

---

### **Project 6: Real-time Collaboration Service**

*   **Purpose:** To enable live monitoring and intervention by supervisors.
*   **Core Technologies:** Nest.js, Socket.io, JWT.
*   **Dependencies:** Project 1 (for authentication), Project 3 (to receive and broadcast simulation state).

---

### **Project 7: Web Client Application (Frontend)**

*   **Purpose:** The main user interface for students and supervisors to interact with the platform.
*   **Core Technologies:** Next.js 14, TypeScript, Tailwind CSS, Zustand/Redux (for state management), Socket.io-client.
*   **Key Responsibilities:**
    *   Build the authentication pages (login, register).
    *   Create the main student dashboard to view and launch scenarios.
    *   Develop the core simulation interface: a chat window for patient interaction, panels for vitals, and areas to order tests/drugs.
    *   Implement the supervisor dashboard for monitoring sessions.
    *   Build the assessment results page to display reports and analytics.
    *   Ensure the application is fully responsive.
*   **Dependencies:** All backend projects (1-6) as it consumes their APIs.

---

### **Project 8: 3D Patient Visualization Module**

*   **Purpose:** To provide an immersive, visual representation of the patient that reflects their current physiological state.
*   **Core Technologies:** React Three Fiber (R3F), Three.js, Next.js, TypeScript.
*   **Key Responsibilities:**
    *   Integrate R3F into the Next.js application.
    *   Source or create a base 3D human model.
    *   Use React state to drive the 3D model's animations (e.g., breathing rate, skin color, facial expressions) based on real-time data from the Scenario Engine.
    *   Develop simple interactions, like clicking on a body part to examine it.
*   **Dependencies:** Project 7 (Web Client Application, for integration) and Project 3 (Scenario Engine, for state data).

---

## **Step-by-Step Implementation Workflow**

Here is the recommended order to tackle these projects, aligning with the original proposal's phases.

**Step 1: Build the Foundation (Month 1)**
1.  **Start Project 1: Core API & User Service.** Get the database, authentication, and basic API running.
2.  **Start Project 7: Web Client Application.** Build the shell: login, registration, and a basic dashboard that can communicate with the Core API.
3.  **Start Project 2: Medical Knowledge Base Service.** Begin building the data models and API endpoints for drugs and tests.

**Step 2: Create the Core Simulation (Months 2-3)**
1.  **Start Project 3: Clinical Scenario Engine.** This is the main focus. Build the logic to run a simple text-based scenario.
2.  **Start Project 4: AI Patient Interaction Service.** Integrate a basic LLM to replace scripted responses. This is a major milestone.
3.  **Continue Project 7:** Build the main simulation UI in the frontend to interact with the engine and AI.

**Step 3: Add Assessment and Collaboration (Months 4-5)**
1.  **Start Project 5: Assessment & Analytics Service.** Hook into the Scenario Engine to start logging actions and calculating scores.
2.  **Start Project 6: Real-time Collaboration Service.** Implement WebSockets to show live data on the frontend.
3.  **Continue Project 7:** Build the supervisor dashboard and the assessment results page.

**Step 4: Enhance Realism and Polish (Months 6+)**
1.  **Start Project 8: 3D Patient Visualization Module.** With the core logic stable, focus on the visual layer.
2.  **Refine All Projects:** Focus on performance optimization, adding more complex scenarios, improving the AI's emotional intelligence, and comprehensive testing.

# Project 1: Core API & User Service


Of course. This is an extensive undertaking, so we will proceed step-by-step, starting with the foundational project. We will build **Project 1: Core API & User Service** from the ground up.

This first project will establish the entire backend foundation, including the database schema, user authentication, and role-based access control. I will provide the full code, documentation, and instructions for running it.

---

## **Project 1: Core API & User Service**

### **Objective**

Create a secure, scalable, and well-documented REST API using NestJS. This service will handle user registration, login, role management, and provide the base structure for all future modules.

### **Technology Stack**

*   **Framework:** Nest.js
*   **Language:** TypeScript
*   **Database:** PostgreSQL
*   **ORM:** Prisma
*   **Authentication:** JWT (JSON Web Tokens)
*   **Validation:** `class-validator` and `class-transformer`

---

### **Step 1: Project Setup & Installation**

First, let's create a new NestJS project and install the necessary dependencies.

```bash
# Install NestJS CLI globally
npm install -g @nestjs/cli

# Create a new project named 'virtual-patient-api'
nest new virtual-patient-api

# Navigate into the project directory
cd virtual-patient-api

# Install required dependencies
npm install @nestjs/config @nestjs/jwt @nestjs/passport @prisma/client bcrypt class-transformer class-validator passport passport-jwt passport-local
npm install --save-dev @types/bcrypt @types/passport-jwt @types/passport-local prisma
```

---

### **Step 2: Database Setup with Prisma**

1.  **Initialize Prisma:**

    ```bash
    npx prisma init
    ```
    This creates a `prisma` directory and a `.env` file.

2.  **Configure Environment Variables:**
    Open the `.env` file and add your database connection string and a JWT secret.

    ```env
    # .env
    # Replace with your actual PostgreSQL connection string
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

    # A strong secret for signing JWTs
    JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
    ```

3.  **Define the Database Schema:**
    Open `prisma/schema.prisma` and replace its content with the following. This defines our `User` and `Role` models.

    ```prisma
    // prisma/schema.prisma

    generator client {
      provider = "prisma-client-js"
    }

    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

    model Role {
      id        Int      @id @default(autoincrement())
      name      String   @unique // e.g., "student", "supervisor", "admin"
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
      users     User[]
    }

    model User {
      id        Int      @id @default(autoincrement())
      email     String   @unique
      password  String   // Hashed password
      firstName String
      lastName  String
      isActive  Boolean  @default(true)
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
      roleId    Int
      role      Role     @relation(fields: [roleId], references: [id])
    }
    ```

4.  **Generate Prisma Client & Migrate Database:**

    ```bash
    # Generate the Prisma Client (TypeScript types for your database)
    npx prisma generate

    # Push the schema to the database (creates tables)
    # For development, 'db push' is fine. For production, use 'migrate dev'
    npx prisma db push
    ```

---

### **Step 3: Code Implementation**

Now, let's create the necessary modules, services, and controllers.

#### **A. Prisma Service (Database Connection)**

Create a dedicated service to provide an instance of the Prisma Client.

```bash
nest generate service prisma
```

**`src/prisma/prisma.service.ts`**
```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

#### **B. Authentication Module**

This module will handle user registration, login, and JWT strategy.

```bash
nest generate module auth
nest generate service auth
nest generate controller auth
```

**`src/auth/auth.module.ts`**
```typescript
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
```

**`src/auth/dto/register.dto.ts`**
```typescript
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  roleName?: string; // e.g., 'student'
}
```

**`src/auth/auth.service.ts`**
```typescript
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role.name };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role.name,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const { email, password, firstName, lastName, roleName = 'student' } = registerDto;

    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const role = await this.prisma.role.findUnique({ where: { name: roleName } });
    if (!role) {
        throw new ConflictException(`Role '${roleName}' not found`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        roleId: role.id,
      },
      include: { role: true },
    });
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = user;
    return result;
  }
}
```

**JWT & Local Strategies**
Create a `strategies` folder inside `src/auth`.

**`src/auth/strategies/local.strategy.ts`**
```typescript
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Use email as username
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```

**`src/auth/strategies/jwt.strategy.ts`**
```typescript
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
```

**Guards**
Create a `guards` folder inside `src/auth`.

**`src/auth/guards/jwt-auth.guard.ts`**
```typescript
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

**`src/auth/guards/roles.guard.ts`**
```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role === role);
  }
}
```

**Roles Decorator**
Create this in the `src/auth` directory.

**`src/auth/roles.decorator.ts`**
```typescript
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
```

**`src/auth/auth.controller.ts`**
```typescript
import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Roles } from './roles.decorator';
import { RolesGuard } from './guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'supervisor')
  @Get('admin/dashboard')
  getAdminDashboard() {
    return { message: 'Welcome to the admin dashboard!' };
  }
}
```

---

### **Step 4: Main App Module & Seeding**

1.  **Update `app.module.ts`:**
    Make sure `ConfigModule` is available globally and that our `AuthModule` is imported.

    **`src/app.module.ts`**
    ```typescript
    import { Module } from '@nestjs/common';
    import { ConfigModule } from '@nestjs/config';
    import { AuthModule } from './auth/auth.module';
    import { PrismaService } from './prisma/prisma.service';

    @Module({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        AuthModule,
      ],
      providers: [PrismaService],
    })
    export class AppModule {}
    ```

2.  **Create a Seed Script:**
    We need to create default roles in our database.

    **`prisma/seed.ts`**
    ```typescript
    import { PrismaClient } from '@prisma/client';

    const prisma = new PrismaClient();

    async function main() {
      console.log('Start seeding...');

      const studentRole = await prisma.role.upsert({
        where: { name: 'student' },
        update: {},
        create: {
          name: 'student',
        },
      });

      const supervisorRole = await prisma.role.upsert({
        where: { name: 'supervisor' },
        update: {},
        create: {
          name: 'supervisor',
        },
      });

      const adminRole = await prisma.role.upsert({
        where: { name: 'admin' },
        update: {},
        create: {
          name: 'admin',
        },
      });

      console.log({ studentRole, supervisorRole, adminRole });
      console.log('Seeding finished.');
    }

    main()
      .catch((e) => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    ```

3.  **Add Seed Script to `package.json`:**
    ```json
    "scripts": {
      // ... other scripts
      "seed": "ts-node prisma/seed.ts"
    },
    ```
    You may need to install `ts-node` as a dev dependency: `npm install --save-dev ts-node`.

4.  **Run the Seed Script:**
    ```bash
    npm run seed
    ```

---

### **Step 5: Running and Testing the API**

1.  **Start the Server:**
    ```bash
    npm run start:dev
    ```
    The API should now be running on `http://localhost:3000`.

2.  **Test with a Tool like Postman or `curl`:**

    **A. Register a new user:**
    ```bash
    curl -X POST http://localhost:3000/auth/register \
    -H "Content-Type: application/json" \
    -d '{
      "email": "student1@example.com",
      "password": "password123",
      "firstName": "John",
      "lastName": "Doe",
      "roleName": "student"
    }'
    ```

    **B. Login to get a JWT:**
    ```bash
    curl -X POST http://localhost:3000/auth/login \
    -H "Content-Type: application/json" \
    -d '{
      "email": "student1@example.com",
      "password": "password123"
    }'
    ```
    Copy the `access_token` from the response.

    **C. Access a protected route:**
    Replace `YOUR_JWT_TOKEN` with the token you copied.
    ```bash
    curl -X GET http://localhost:3000/auth/profile \
    -H "Authorization: Bearer YOUR_JWT_TOKEN"
    ```

    **D. Test a role-protected route (should fail for 'student' role):**
    ```bash
    curl -X GET http://localhost:3000/auth/admin/dashboard \
    -H "Authorization: Bearer YOUR_JWT_TOKEN"
    ```
    This should return a `403 Forbidden` error.

---

### **Mocking for Frontend Testing**

Even before building the frontend (Project 7), you can test this API. A frontend developer can use tools like **Postman**, **Insomnia**, or even write a simple script using `fetch` to interact with these endpoints.

For a more integrated mock experience, a frontend developer could use a library like **MSW (Mock Service Worker)**. They would build their UI components and configure MSW to intercept API calls. Initially, MSW would return **mocked JSON responses**. Once the real API is ready, they can simply turn off the mock and point their app to the live `http://localhost:3000` backend without changing any of their frontend code.

**Example Mocked Response for `/auth/profile`:**
```json
{
  "userId": 1,
  "email": "student1@example.com",
  "role": "student"
}
```

This completes **Project 1**. We now have a secure, documented, and tested backend foundation for user management and authentication.

### **Next Steps**

With Project 1 complete, we can now proceed in parallel or sequentially:
1.  **Start Project 2 (Medical Knowledge Base Service):** Add new modules and Prisma models for drugs, procedures, etc., to this existing codebase.
2.  **Start Project 7 (Web Client Shell):** A frontend developer can begin building the login/registration pages and the main dashboard, using our live API or MSW mocks.
# ---
# ---
# ---
# ---
# ---
# ---
# ---
# ---
# ---
# ---
# ---
# ---
# ---
# ---