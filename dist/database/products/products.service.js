"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let ProductsService = class ProductsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async getProducts() {
        return await this.databaseService.query('SELECT * FROM products');
    }
    async addProduct(body) {
        let sql = 'INSERT INTO Products (productName, includedDetails) VALUES (?, ?)';
        let params = [body.nameToSend, JSON.stringify(body.savedDetails)];
        return await this.databaseService.query(sql, params);
    }
    async updateProduct(selectedName, body) {
        let sql = 'UPDATE Products SET productName = ?, includedDetails = ? WHERE productName = ?';
        let params = [body.nameToSend, JSON.stringify(body.savedDetails), selectedName];
        return await this.databaseService.query(sql, params);
    }
    async addProductFromExcel(body) {
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
            includedDetails = JSON.stringify(includedDetails);
            let sql = `INSERT INTO products (productName, includedDetails) VALUES (?, ?)`;
            let params = (includedDetails);
            await this.databaseService.query(sql, params);
        }
        catch (error) {
            console.error('Error creating table from Excel data:', error);
            throw error;
        }
    }
    async deleteProduct(id) {
        try {
            let sql = 'DELETE FROM products WHERE productName = ?';
            let params = [id];
            await this.databaseService.query(sql, params);
        }
        catch (error) {
            console.error('Error deleting product:', error);
        }
    }
    async subtractDetails(body) {
        console.log(body);
        const { selectedOrder: orderId, productName, includedDetails: requiredDetails } = body;
        return new Promise(async (resolve, reject) => {
            try {
                await this.databaseService.runQuery('BEGIN TRANSACTION');
                console.log(orderId);
                const order = await this.databaseService.getQuery('SELECT includedProducts FROM orders WHERE id = ?', [orderId]);
                const includedProducts = JSON.parse(order.includedProducts);
                console.log(includedProducts + '123123');
                const includedProduct = includedProducts.find(product => product.productName === productName);
                if (!includedProduct) {
                    throw new Error(`Product ${productName} not found in the order`);
                }
                const quantityNeededMultiply = includedProduct.quantity;
                const detailsToUpdate = requiredDetails.map(detail => {
                    const newQuantity = (detail.quantity * quantityNeededMultiply) * -1;
                    return {
                        detailName: detail.detailName,
                        quantity: newQuantity,
                    };
                });
                const updatedDetails = await Promise.all(detailsToUpdate.map(detail => this.databaseService.query('SELECT * FROM Details WHERE detailName = ?', [detail.detailName])
                    .then(existingDetail => {
                    if (existingDetail.length > 0) {
                        const newQuantity = existingDetail[0].quantity + detail.quantity;
                        if (newQuantity < 0) {
                            throw new Error(`Not enough quantity for detail: ${detail.detailName}`);
                        }
                        return this.databaseService.runQuery('UPDATE Details SET quantity = ? WHERE id = ?', [newQuantity, existingDetail[0].id]);
                    }
                    else {
                        return this.databaseService.runQuery('INSERT INTO Details (detailName, quantity) VALUES (?, ?)', [detail.detailName, detail.quantity]);
                    }
                })));
                await this.databaseService.runQuery('COMMIT');
                resolve();
            }
            catch (error) {
                reject(new common_1.InternalServerErrorException(error.message));
            }
        });
    }
    async updateProductManufactured(body) {
        const { selectedOrder, productName, manufactured } = body;
        const existingOrder = await this.databaseService.query('SELECT includedProducts FROM Orders WHERE id = ?', [selectedOrder]);
        if (existingOrder.length === 0) {
            throw new Error(`Order ${selectedOrder} not found`);
        }
        const includedProducts = JSON.parse(existingOrder[0].includedProducts);
        const productIndex = includedProducts.findIndex(product => product.productName === productName);
        if (productIndex === -1) {
            throw new Error(`Product ${productName} not found in the order`);
        }
        includedProducts[productIndex].manufactured = manufactured ? 1 : 0;
        const sql = `UPDATE Orders SET includedProducts = ? WHERE id = ?`;
        const params = [JSON.stringify(includedProducts), selectedOrder];
        return await this.databaseService.runQuery(sql, params);
    }
};
exports.ProductsService = ProductsService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "addProduct", null);
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ProductsService);
//# sourceMappingURL=products.service.js.map