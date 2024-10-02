// lib
import { Module } from '@nestjs/common';

// modules
import { ConfigModule } from '../config/config.module';

// services
import { DrizzleService } from './drizzle.service';

@Module({
  imports: [ConfigModule],
  providers: [DrizzleService],
  exports: [DrizzleService],
})
export class DrizzleModule {}
