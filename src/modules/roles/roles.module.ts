// lib
import { Module } from '@nestjs/common';

// modules
import { ConfigModule } from '@nestjs/config';
import { DrizzleModule } from 'src/common/drizzle/drizzle.module';

// services
import { DrizzleService } from 'src/common/drizzle/drizzle.service';

@Module({
    imports: [ConfigModule, DrizzleModule],
    providers: [DrizzleService]
})
export class RolesModule {}
