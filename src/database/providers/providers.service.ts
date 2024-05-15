import { Body, Injectable } from "@nestjs/common";
import * as sqlite3 from "sqlite3";
import { DatabaseService } from "../database.service";

@Injectable()
export class ProvidersService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getAllProviders(): Promise<any[]> {
        return await this.databaseService.query('SELECT * FROM providers')
    }

    async addProvider(trimmedName: string): Promise<any> {
        const sql = 'INSERT INTO providers (name) VALUES (?)';
        const params = [trimmedName];
        return await this.databaseService.query(sql, params);
    }
}