import { Module } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';

@Module({
  providers: [DrizzleService]
})
export class DrizzleModule {}
