// lib
import { Module } from '@nestjs/common';

// user-defined modules
import { ConfigModule } from 'src/common/config/config.module';
import { CompressionModule } from 'src/common/compression/compression.module';

@Module({
  imports: [ConfigModule, CompressionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
