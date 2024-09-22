// lib
import { Module } from '@nestjs/common';

// user-defined modules
import { ConfigModule } from 'src/common/config/config.module';
import { DrizzleModule } from 'src/common/drizzle/drizzle.module';

@Module({
  imports: [ConfigModule, DrizzleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
