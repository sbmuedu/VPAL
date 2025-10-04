import { Module } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';
import { ScenariosController } from './scenarios.controller';
import { PrismaModule } from '../prisma/prisma.module';

/**
 * Scenarios Module
 * Provides medical scenario management functionality including creation, validation, and access control
 */
@Module({
  imports: [PrismaModule],
  providers: [ScenariosService],
  controllers: [ScenariosController],
  exports: [ScenariosService],
})
export class ScenariosModule {}