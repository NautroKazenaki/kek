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
exports.ProductsInDevelopmentService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let ProductsInDevelopmentService = class ProductsInDevelopmentService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async setManfuctaringData(body) {
        try {
            let sql = `INSERT INTO ProductsInDevelopment (id, productName, part, manufacturer, startDateOfManufacturer, endDateOfManufacturer, comments, additionalDetails, phase, partOfOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
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
            ];
            await this.databaseService.query(sql, params);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getManfuctaringData() {
        try {
            return await this.databaseService.query('SELECT * FROM ProductsInDevelopment');
        }
        catch (error) {
            console.error(error);
        }
    }
    async updatePhase(id, phase) {
        try {
            let sql = `UPDATE ProductsInDevelopment SET phase = ? WHERE id = ?`;
            let params = [phase, id];
            await this.databaseService.query(sql, params);
        }
        catch (error) {
            console.error(error);
        }
    }
    async setEndDate(id, manufacturingData) {
        try {
            let sql = `UPDATE ProductsInDevelopment SET endDateOfManufacturer = ? WHERE id = ?`;
            let params = [manufacturingData.endDateOfManufacturer, id];
            await this.databaseService.query(sql, params);
        }
        catch (error) {
            console.error(error);
        }
    }
    async setComment(id, body) {
        return new Promise((resolve, reject) => {
            this.databaseService.query('SELECT comments FROM ProductsInDevelopment WHERE id = ?', [id])
                .then(rows => {
                let existingComments = [];
                if (rows.length > 0 && rows[0].comments) {
                    existingComments = JSON.parse(rows[0].comments);
                }
                existingComments.push(body.comment);
                const updatedComments = JSON.stringify(existingComments);
                return this.databaseService.query('UPDATE ProductsInDevelopment SET comments = ? WHERE id = ?', [updatedComments, id]);
            })
                .then(() => resolve())
                .catch(error => reject(error));
        });
    }
};
exports.ProductsInDevelopmentService = ProductsInDevelopmentService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsInDevelopmentService.prototype, "setManfuctaringData", null);
exports.ProductsInDevelopmentService = ProductsInDevelopmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ProductsInDevelopmentService);
//# sourceMappingURL=productsInDevelopment.service.js.map