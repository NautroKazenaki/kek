import { Body, Injectable } from '@nestjs/common'
import { DatabaseService } from "../database.service";

@Injectable()
export class ProductsInDevelopmentService {
    constructor(private databaseService: DatabaseService) { }

    async setManfuctaringData(@Body() body: any): Promise<void> {
        try {
            let sql = `INSERT INTO ProductsInDevelopment (id, productName, part, manufacturer, startDateOfManufacturer, endDateOfManufacturer, comments, additionalDetails, phase, partOfOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
            let params = [
                body.id,
                body.productName,
                body.part,
                body.manufacturer,
                body.startDateOfManufacturer,
                body.endDateOfManufacturer,
                JSON.stringify(body.comments),
                JSON.stringify(body.additionalDetails),
                body.phase,
                body.partOfOrder
            ]
            await this.databaseService.query(sql, params)
        } catch (error) {
            console.error(error)
        }
    }

    async getManfuctaringData(): Promise<any[]> {
        try {
            return await this.databaseService.query('SELECT * FROM ProductsInDevelopment')
        } catch (error) {
            console.error(error)
        }
    }

    async updatePhase(id: any, phase: number) {
        try {
            let sql = `UPDATE ProductsInDevelopment SET phase = ? WHERE id = ?`
            let params = [phase, id]
            await this.databaseService.query(sql, params)
        } catch (error) {
            console.error(error)
        }
    }
    async setEndDate(id: any, manufacturingData: any) {
        try {
            let sql = `UPDATE ProductsInDevelopment SET endDateOfManufacturer = ? WHERE id = ?`
            let params = [manufacturingData.endDateOfManufacturer, id]
            await this.databaseService.query(sql, params)
        } catch (error) {
            console.error(error)
        }
    }

    async setComment(id: any, body: any) {
        return new Promise<void>((resolve, reject) => {
            // Retrieve the existing comments for the product
            this.databaseService.query('SELECT comments FROM ProductsInDevelopment WHERE id = ?', [id])
                .then(rows => {
                    let existingComments = [];
                    if (rows.length > 0 && rows[0].comments) {
                        // If there are existing comments, parse them from JSON
                        existingComments = JSON.parse(rows[0].comments);
                    }
                    // Append the new comment to the existing array
                    existingComments.push(body.comment);
                    // Convert the updated comments array back to JSON
                    const updatedComments = JSON.stringify(existingComments);

                    // Update the database with the new comments
                    return this.databaseService.query('UPDATE ProductsInDevelopment SET comments = ? WHERE id = ?', [updatedComments, id]);
                })
                .then(() => resolve())
                .catch(error => reject(error));
        });
    }
    async updateProductAdditionalDetails(body: any): Promise<void> {
        let productsInDevelopment = await this.databaseService.query('SELECT * FROM ProductsInDevelopment');
        let product = productsInDevelopment.find(product => product.id === body.cardId);
        if (product) {
            if (!product.additionalDetails) {
                product.additionalDetails = [];
            } else if (!Array.isArray(product.additionalDetails)) {
                product.additionalDetails = JSON.parse(product.additionalDetails);
            }
            product.additionalDetails.push({ detailName: body.detail, quantity: body.quantity });
            const additionalDetailsString = JSON.stringify(product.additionalDetails);
            const sql = `UPDATE ProductsInDevelopment SET additionalDetails = ? WHERE id = ?`;
            const params = [additionalDetailsString, body.cardId];
            return await this.databaseService.runQuery(sql, params);
        }
    }
    async updateProductComments(body: any): Promise<any[]> {
        let productsInDevelopment = await this.databaseService.query('SELECT * FROM ProductsInDevelopment');
        let product = productsInDevelopment.find(product => product.id === body.cardId);
        if (product) {
            product.comments = product.comments ? JSON.parse(product.comments) : [];
            product.comments.push(body.comment);
            const sql = `UPDATE ProductsInDevelopment SET comments = ? WHERE id = ?`;
            const params = [JSON.stringify(product.comments), body.cardId];
            return await this.databaseService.query(sql, params);
        }
    }
}