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
exports.DetailsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let DetailsService = class DetailsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async addDetail(body) {
        try {
            let sql = 'SELECT * FROM Details WHERE detailName = ? AND provider = ?';
            let params = [body.name, body.selectedProvider];
            const existingDetail = await this.databaseService.query(sql, params);
            if (existingDetail.length > 0) {
                sql = 'UPDATE Details SET quantity = quantity + ? WHERE detailName = ? AND provider = ?';
                params = [body.quantity, body.name, body.selectedProvider];
                await this.databaseService.query(sql, params);
            }
            else {
                sql = 'INSERT INTO Details (detailName, provider, quantity) VALUES (?, ?, ?)';
                params = [body.name, body.selectedProvider, body.quantity];
                await this.databaseService.query(sql, params);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    async getDetails() {
        try {
            return await this.databaseService.query('SELECT * FROM Details');
        }
        catch (error) {
            console.error(error);
        }
    }
};
exports.DetailsService = DetailsService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DetailsService.prototype, "addDetail", null);
exports.DetailsService = DetailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DetailsService);
//# sourceMappingURL=details.service.js.map