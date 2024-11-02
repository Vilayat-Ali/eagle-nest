// lib
import { SQL, TableConfig, Subquery, ColumnsSelection } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";
import { PgViewBase } from "drizzle-orm/pg-core/view-base";

/**
 * An interface for a CRUD (Create, Read, Update, Delete) service that 
 * abstracts common database operations. This interface can be implemented 
 * by a service class to standardize CRUD functionalities across different modules.
 *
 * @template T - The type of the model being managed, which can be 
 * a SQL query, a PostgreSQL table, a subquery, or a view.
 */
export interface CrudInterface<T extends SQL<unknown> | PgTable<TableConfig> | Subquery<string, Record<string, unknown>> | PgViewBase<string, boolean, ColumnsSelection>> {
    /** The model associated with this CRUD service. */
    readonly model: T;

    // Create

    /**
     * Creates a single record in the database.
     *
     * @param data - The data for the new record.
     * @param options - Additional options for the create operation.
     */
    createOne<D>(data: D, options: any): void;

    /**
     * Creates multiple records in the database.
     *
     * @param data - An array of data for the new records.
     * @param options - Additional options for the create operation.
     */
    createMany<D>(data: D[], options: any): void;

    // Read

    /**
     * Retrieves a single record from the database based on the specified options.
     *
     * @param options - Options to specify which record to retrieve.
     */
    getOne(options: any): void;

    /**
     * Retrieves all records from the database with pagination.
     *
     * @param options - Options for pagination and filtering.
     */
    getAllPaginated(options: any): void;

    // Update

    /**
     * Updates a single record identified by its ID.
     *
     * @param id - The ID of the record to update.
     * @param UpdateData - The data to update the record with.
     * @param options - Additional options for the update operation.
     */
    updateOneById<I, U>(id: I, UpdateData: U, options: any): void;

    // Delete

    /**
     * Performs a soft delete on a record identified by its ID.
     *
     * @param id - The ID of the record to soft delete.
     */
    softDeleteById<I>(id: I): void;

    /**
     * Performs a hard delete on a record identified by its ID.
     *
     * @param id - The ID of the record to hard delete.
     */
    hardDeleteById<I>(id: I): void;

    // Helper Methods

    /**
     * Counts the total number of records in the model.
     *
     * @param options - Options for filtering the count.
     * @returns The total count of records.
     */
    count(options: any): number;

    /**
     * Finds records based on specific criteria.
     *
     * @param criteria - The criteria for filtering records.
     * @param options - Additional options for the find operation.
     * @returns An array of matching records.
     */
    findByCriteria<C>(criteria: C, options: any): any[];

    /**
     * Checks if a record exists by its ID.
     *
     * @param id - The ID of the record to check.
     * @returns True if the record exists, false otherwise.
     */
    existsById<I>(id: I): boolean;
}
