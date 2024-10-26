// lib
import { HttpStatus, Injectable } from "@nestjs/common";

// services
import { ConfigService } from "../../../common/config/config.service";
import { DrizzleService } from "../../../common/drizzle/drizzle.service";

// drizzle
import { roles, insertRoleTableSchema, selectRoleTableSchema } from "../../../common/drizzle/schema";
import { z, ZodError } from "zod";

@Injectable()
export class RoleService {
    constructor(private readonly configService: ConfigService, private readonly drizzleService: DrizzleService) {}

    createRole(payload: z.infer<typeof insertRoleTableSchema>) {
        const dbClient = this.drizzleService.getDBClient();

        return dbClient.insert(roles).values(
            {
                role: payload.role,
                description: payload.description,
            }
        );
    }

    updateRole(identifierField: z.infer<typeof selectRoleTableSchema>, updation: Partial<z.infer<typeof selectRoleTableSchema>>) {
        const dbClient = this.drizzleService.getDBClient();

        // continue from here and make all crud operations as a extendible class
        return dbClient.update(roles).set(updation);
    }
}