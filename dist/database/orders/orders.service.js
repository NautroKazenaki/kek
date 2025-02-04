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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let OrdersService = class OrdersService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async getOrders() {
        return await this.databaseService.query('SELECT * FROM Orders');
    }
    async addOrder(body) {
        let sql = 'INSERT INTO Orders (startDate, orderTo, includedProducts, userName) VALUES (?, ?, ?, ?)';
        console.log(body);
        let params = [body.startDate, body.orderTo, JSON.stringify(body.selectedProducts), body.username];
        return await this.databaseService.query(sql, params);
    }
    async deleteOrder(id) {
        let sql = 'DELETE FROM Orders WHERE id = ?';
        let params = [id];
        return await this.databaseService.query(sql, params);
    }
    async getManufacturingStatus(body) {
        const sql = 'SELECT * FROM ManufacturingStatus WHERE orderId = ?';
        const params = [body.selectedOrder];
        return await this.databaseService.query(sql, params);
    }
    async getOrderById(body) {
        const sql = 'SELECT * FROM Orders WHERE id = ?';
        const params = [body.selectedOrder];
        return await this.databaseService.query(sql, params);
    }
};
exports.OrdersService = OrdersService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersService.prototype, "addOrder", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersService.prototype, "getManufacturingStatus", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersService.prototype, "getOrderById", null);
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map