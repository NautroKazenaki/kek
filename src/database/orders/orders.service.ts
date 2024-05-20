import { Body, Injectable } from '@nestjs/common'
import { DatabaseService } from '../database.service'

@Injectable()
export class OrdersService {

    constructor(private readonly databaseService: DatabaseService) { }

    async getOrders(): Promise<any[]> {
        return await  this.databaseService.query('SELECT * FROM Orders')
    }

    async addOrder(@Body() body: any): Promise <any[]> {
        let sql = 'INSERT INTO Orders (startDate, orderTo, includedProducts, userName) VALUES (?, ?, ?, ?)';
        console.log(body)
        let params = [body.startDate, body.orderTo, JSON.stringify(body.selectedProducts), body.username];
        return await this.databaseService.query(sql, params)
    }

    async deleteOrder(id: string): Promise<any[]> {
        let sql = 'DELETE FROM Orders WHERE id = ?';
        let params = [id];
        return await this.databaseService.query(sql, params)
    }

    async getManufacturingStatus(@Body() body: any): Promise<any[]> {
        const sql = 'SELECT * FROM ManufacturingStatus WHERE orderId = ?'
        const params = [body.selectedOrder]
        return await this.databaseService.query(sql, params)
    }

    async getOrderById(@Body() body: any): Promise<any[]> {
        const sql = 'SELECT * FROM Orders WHERE id = ?'
        const params = [body.selectedOrder]
        return await this.databaseService.query(sql, params)
    }

}