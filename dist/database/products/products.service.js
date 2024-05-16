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