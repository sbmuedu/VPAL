import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { LLMService } from './llm.service';
import { LLMController } from './llm.controller';
import { PrismaModule } from '../prisma/prisma.module';

/**
 * LLM Module
 * Provides AI-powered patient interactions using local Ollama models
 * Includes conversation generation, analysis, and medical reasoning
 */
@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 30000,
        maxRedirects: 5,
      }),
    }),
  ],
  providers: [LLMService],
  controllers: [LLMController],
  exports: [LLMService],
})
export class LLMModule {}
