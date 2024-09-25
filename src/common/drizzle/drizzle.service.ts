import { Injectable } from '@nestjs/common';
import postgres from 'postgres';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { ConfigService } from '../config/config.service';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

// schema
import * as schema from './schema';

@Injectable()
export class DrizzleService {
  private dbClient: PostgresJsDatabase<any> | undefined;

  constructor(private readonly configService: ConfigService) {
    if (!this.dbClient) {
      const conn = postgres(this.configService.getDBConnectionString());
      this.dbClient = drizzle(conn, { schema });
    }
  }

  public runMigration() {
    try {
      const conn = postgres(this.configService.getDBConnectionString(), {
        max: 1,
      });
      migrate(drizzle(conn, { schema }), {
        migrationsSchema: './schema',
        migrationsFolder: 'migrations',
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  public getDBClient() {
    return this.dbClient;
  }
}
