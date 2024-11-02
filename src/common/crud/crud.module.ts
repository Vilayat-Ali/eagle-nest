// lib
import { Module } from '@nestjs/common';

// module import
import { ConfigModule } from '../config/config.module';
import { PaginationModule } from '../pagination/pagination.module';

@Module({
    imports: [PaginationModule, ConfigModule]
})
export class CrudModule {}
