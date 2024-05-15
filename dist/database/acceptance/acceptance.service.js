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
exports.AcceptanceService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let AcceptanceService = class AcceptanceService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async addStuff(body) {
        const sql = 'INSERT INTO AcceptanceDB (userName, date, productName, quantity, provider, acceptanceNumber) VALUES (?, ?, ?, ?, ?, ?)';
        const params = [body.username, body.currentDateTime, body.name, body.quantity, body.selectedProvider, body.acceptanceCounter];
        return await this.databaseService.query(sql, params);
    }
};
exports.AcceptanceService = AcceptanceService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AcceptanceService.prototype, "addStuff", null);
exports.AcceptanceService = AcceptanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AcceptanceService);
//# sourceMappingURL=acceptance.service.js.map