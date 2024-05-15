"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptanceModule = void 0;
const common_1 = require("@nestjs/common");
const acceptance_controller_1 = require("./acceptance.controller");
const acceptance_service_1 = require("./acceptance.service");
const database_module_1 = require("../database.module");
let AcceptanceModule = class AcceptanceModule {
};
exports.AcceptanceModule = AcceptanceModule;
exports.AcceptanceModule = AcceptanceModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [acceptance_controller_1.AcceptanceController],
        providers: [acceptance_service_1.AcceptanceService],
    })
], AcceptanceModule);
//# sourceMappingURL=acceptance.module.js.map