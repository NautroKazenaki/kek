import {Body, Injectable} from '@nestjs/common'
import {DatabaseService} from "../database.service";

@Injectable()
export class ProductsInDevelopmentService {
    constructor(private databaseService: DatabaseService) {}

    async setManfuctaringData(@Body() body: any): Promise<void> {
        console.log(body + '1234567890')
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
}