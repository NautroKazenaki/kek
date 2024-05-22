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
exports.ArchieveService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
const Jimp = require("jimp");
const qrCode = require("qrcode-reader");
let ArchieveService = class ArchieveService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async scanImage(body) {
        try {
            const base64Data = body.image.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const image = await Jimp.read(buffer);
            const qr = new qrCode();
            return new Promise((resolve, reject) => {
                qr.callback = (err, value) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        const result = value.result.substring(0, value.result.indexOf('|') + 1);
                        resolve({ result });
                    }
                };
                qr.decode(image.bitmap);
            });
        }
        catch (error) {
            throw new Error(`Error processing image: ${error.message}`);
        }
    }
};
exports.ArchieveService = ArchieveService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArchieveService.prototype, "scanImage", null);
exports.ArchieveService = ArchieveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ArchieveService);
//# sourceMappingURL=archieve.service.js.map