import { Module } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [ConfigService],
  providers: [DrizzleService],
})
export class DrizzleModule {}
