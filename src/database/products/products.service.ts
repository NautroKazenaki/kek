import {Body, Injectable} from '@nestjs/common';
import { DatabaseService } from '../database.service';

@Injectable()
export class ProductsService {

    constructor(private readonly databaseService: DatabaseService) {}

    async getProducts(): Promise<any[]> {
        return this.databaseService.query('SELECT * FROM products');
    }

    async addProduct(@Body() body: any): Promise<any[]> {
        let sql = 'INSERT INTO Products (productName, includedDetails) VALUES (?, ?)';
        let params = [body.nameToSend, JSON.stringify(body.savedDetails)];
        return await this.databaseService.query(sql, params);
    }

    async updateProduct(selectedName: string, body: any): Promise<any[]> {
        let sql = 'UPDATE Products SET productName = ?, includedDetails = ? WHERE productName = ?';
        let params = [body.nameToSend, JSON.stringify(body.savedDetails), selectedName];
        return await this.databaseService.query(sql, params);
    }

    async addProductFromExcel(body: any): Promise<void> {
        try {
            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
            const year = currentDate.getFullYear().toString();
        
            let productName = `${body[0]["Electronics Design OÜ"]}_${day}.${month}.${year}`;
            
            let includedDetails = body.slice(2).map(item => {
                let detailName = `${item.__EMPTY_1 || ''} ${item.__EMPTY_4 || ''}`.trim();
                let quantity = item.__EMPTY_2;
        
                if (detailName.trim() !== '') {
                    return { detailName, quantity };
                }
            }).filter(Boolean);
            includedDetails = JSON.stringify(includedDetails)
            let sql = `INSERT INTO products (productName, includedDetails) VALUES (?, ?)`;
            let params = (includedDetails);
            await this.databaseService.query(sql, params);
            
        } catch (error) {
            console.error('Error creating table from Excel data:', error);
            throw error; // Rethrow the error to handle it elsewhere if needed
        }
    }

    async deleteProduct(id: string): Promise<void> {
        try {
            let sql = 'DELETE FROM products WHERE productName = ?';
            let params = [id];
            await this.databaseService.query(sql, params);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }
}