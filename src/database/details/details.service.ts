import {Body, Injectable} from '@nestjs/common';
import * as sqlite3 from 'sqlite3';
import {DatabaseService} from "../database.service";

@Injectable()
export class DetailsService {
    constructor(private readonly databaseService: DatabaseService) { }

    async addDetail(@Body() body:any): Promise<void> {
        try {
            let sql = 'SELECT * FROM Details WHERE detailName = ? AND provider = ?'
            let params = [body.name, body.selectedProvider]
            const existingDetail = await this.databaseService.query(sql, params)

            if (existingDetail.length > 0) {
                sql = 'UPDATE Details SET quantity = quantity + ? WHERE detailName = ? AND provider = ?'
                params = [body.quantity, body.name, body.selectedProvider]
                await this.databaseService.query(sql, params)
            } else {
                sql = 'INSERT INTO Details (detailName, provider, quantity) VALUES (?, ?, ?)'
                params = [body.name, body.selectedProvider, body.quantity]
                await this.databaseService.query(sql, params)
            }
        } catch (error) {
            console.error(error)
        }
    }
}