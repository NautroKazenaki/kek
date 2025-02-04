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
exports.AcceptanceController = void 0;
const common_1 = require("@nestjs/common");
const acceptance_service_1 = require("./acceptance.service");
let AcceptanceController = class AcceptanceController {
    constructor(acceptanceService) {
        this.acceptanceService = acceptanceService;
    }
    async addStuff(body) {
        return await this.acceptanceService.addStuff(body);
    }
    async getAcceptanceData() {
        return await this.acceptanceService.getAcceptanceData();
    }
};
exports.AcceptanceController = AcceptanceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AcceptanceController.prototype, "addStuff", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcceptanceController.prototype, "getAcceptanceData", null);
exports.AcceptanceController = AcceptanceController = __decorate([
    (0, common_1.Controller)('acceptance'),
    __metadata("design:paramtypes", [acceptance_service_1.AcceptanceService])
], AcceptanceController);
//# sourceMappingURL=acceptance.controller.js.map