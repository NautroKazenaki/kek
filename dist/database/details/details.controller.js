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
exports.DetailsController = void 0;
const common_1 = require("@nestjs/common");
const details_service_1 = require("./details.service");
let DetailsController = class DetailsController {
    constructor(detailsService) {
        this.detailsService = detailsService;
    }
    async addDetail(body) {
        return await this.detailsService.addDetail(body);
    }
    async getDetails() {
        return await this.detailsService.getDetails();
    }
    async updateDetailQuantity(detailName, body) {
        console.log(body);
        return await this.detailsService.updateDetailQuantity(detailName, body);
    }
};
exports.DetailsController = DetailsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DetailsController.prototype, "addDetail", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DetailsController.prototype, "getDetails", null);
__decorate([
    (0, common_1.Put)(':detailName'),
    __param(0, (0, common_1.Param)('detailName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DetailsController.prototype, "updateDetailQuantity", null);
exports.DetailsController = DetailsController = __decorate([
    (0, common_1.Controller)('details'),
    __metadata("design:paramtypes", [details_service_1.DetailsService])
], DetailsController);
//# sourceMappingURL=details.controller.js.map