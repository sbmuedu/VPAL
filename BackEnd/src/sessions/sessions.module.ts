import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { LLMModule } from '../llm/llm.module';

/**
 * Sessions Module
 * Provides scenario session management including time control, patient interactions, and medical actions
 */
@Module({
  imports: [
    PrismaModule,
    LLMModule, // Required for patient conversations
  ],
  providers: [SessionsService],
  controllers: [SessionsController],
  exports: [SessionsService],
})
export class SessionsModule {}