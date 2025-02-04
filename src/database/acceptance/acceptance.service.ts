import {Body, Injectable} from '@nestjs/common';
import * as sqlite3 from 'sqlite3';
import {DatabaseService} from "../database.service";

@Injectable()
export class AcceptanceService {
    constructor(private readonly databaseService: DatabaseService) { }

    async addStuff(@Body() body:any): Promise<any[]> {
        const sql = 'INSERT INTO AcceptanceDB (userName, date, productName, quantity, provider, acceptanceNumber) VALUES (?, ?, ?, ?, ?, ?)'
        const params = [body.username, body.currentDateTime, body.name, body.quantity, body.selectedProvider, body.acceptanceCounter]
        return await this.databaseService.query(sql, params)
    }

    async getAcceptanceData(): Promise<any[]> {
        try {
            return await this.databaseService.query('SELECT * FROM AcceptanceDB ORDER BY acceptanceNumber DESC, id DESC');
        } catch (error) {
            console.error('Error fetching data from AcceptanceDB:', error);
        }
    }
}