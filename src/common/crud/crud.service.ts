// lib
import { Injectable } from "@nestjs/common";
import { SQL, TableConfig, Subquery, ColumnsSelection } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";
import { PgViewBase } from "drizzle-orm/pg-core/view-base";


// services
import { ConfigService } from "../config/config.service";
import { PaginationService } from "../pagination/pagination.service";

// interface 
import { CrudInterface } from "./interfaces/Crud.interface";

@Injectable()
export class CrudService<T extends SQL<unknown> | PgTable<TableConfig> | Subquery<string, Record<string, unknown>> | PgViewBase<string, boolean, ColumnsSelection>> implements CrudInterface<T> {
    constructor(private readonly configService: ConfigService, private readonly paginationService: PaginationService) {}
    model: T;
    
    createOne<D>(data: D, options: any): void {
        throw new Error("Method not implemented.");
    }
    createMany<D>(data: D[], options: any): void {
        throw new Error("Method not implemented.");
    }
    getOne(options: any): void {
        throw new Error("Method not implemented.");
    }
    getAllPaginated(options: any): void {
        throw new Error("Method not implemented.");
    }
    updateOneById<I, U>(id: I, UpdateData: U, options: any): void {
        throw new Error("Method not implemented.");
    }
    softDeleteById<I>(id: I): void {
        throw new Error("Method not implemented.");
    }
    hardDeleteById<I>(id: I): void {
        throw new Error("Method not implemented.");
    }
    count(options: any): number {
        throw new Error("Method not implemented.");
    }
    findByCriteria<C>(criteria: C, options: any): any[] {
        throw new Error("Method not implemented.");
    }
    existsById<I>(id: I): boolean {
        throw new Error("Method not implemented.");
    }
    
}