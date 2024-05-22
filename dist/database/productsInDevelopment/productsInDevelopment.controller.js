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
exports.ProductsInDevelopmentController = void 0;
const common_1 = require("@nestjs/common");
const productsInDevelopment_service_1 = require("./productsInDevelopment.service");
let ProductsInDevelopmentController = class ProductsInDevelopmentController {
    constructor(productsInDevelopmentService) {
        this.productsInDevelopmentService = productsInDevelopmentService;
    }
    setManfuctaringData(body) {
        return this.productsInDevelopmentService.setManfuctaringData(body);
    }
    getManfuctaringData() {
        return this.productsInDevelopmentService.getManfuctaringData();
    }
    async updateProductAdditionalDetails(body) {
        return await this.productsInDevelopmentService.updateProductAdditionalDetails(body);
    }
    async updateProductComments(body) {
        return await this.productsInDevelopmentService.updateProductComments(body);
    }
    updatePhase(id, phase) {
        return this.productsInDevelopmentService.updatePhase(id, phase);
    }
    setEndDate(id, manufacturingData) {
        return this.productsInDevelopmentService.setEndDate(id, manufacturingData);
    }
    setComments(id, body) {
        return this.productsInDevelopmentService.setComment(id, body);
    }
};
exports.ProductsInDevelopmentController = ProductsInDevelopmentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsInDevelopmentController.prototype, "setManfuctaringData", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsInDevelopmentController.prototype, "getManfuctaringData", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsInDevelopmentController.prototype, "updateProductAdditionalDetails", null);
__decorate([
    (0, common_1.Put)('/additionalComments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsInDevelopmentController.prototype, "updateProductComments", null);
__decorate([
    (0, common_1.Put)(':id/phase'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('phase')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], ProductsInDevelopmentController.prototype, "updatePhase", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductsInDevelopmentController.prototype, "setEndDate", null);
__decorate([
    (0, common_1.Put)(':id/comment'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductsInDevelopmentController.prototype, "setComments", null);
exports.ProductsInDevelopmentController = ProductsInDevelopmentController = __decorate([
    (0, common_1.Controller)('productsInDevelopment'),
    __metadata("design:paramtypes", [productsInDevelopment_service_1.ProductsInDevelopmentService])
], ProductsInDevelopmentController);
//# sourceMappingURL=productsInDevelopment.controller.js.map