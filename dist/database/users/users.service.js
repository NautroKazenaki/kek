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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_dto_1 = require("./users.dto");
const database_service_1 = require("../database.service");
let UsersService = class UsersService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async addDefaultUserIfNeeded() {
        try {
            const name = 'admin';
            const password = 'Dd7560848';
            const level = 0;
            const existingUser = await this.databaseService.query('SELECT * FROM users WHERE name = ?', [name]);
            console.log(existingUser);
            if (existingUser.length > 0) {
                console.log('Admin user already exists');
                return;
            }
            await this.addUser({ name, password, level });
        }
        catch (error) {
            console.error('Error adding default user:', error);
        }
    }
    async addUser({ name, password, level }) {
        let insertResult = this.databaseService.query('INSERT INTO users (name, password, level) VALUES (?, ?, ?)', [name, password, level]);
        if (insertResult) {
            console.log('Admin added successfully:');
        }
        else {
            console.error('Admin already exist');
        }
    }
    async findAll() {
        return await this.databaseService.query('SELECT * FROM users');
    }
    async loginUser(email, password) {
        const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
        const params = [email, password];
        return await this.databaseService.query(sql, params);
    }
};
exports.UsersService = UsersService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.usersDto]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "addUser", null);
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsersService);
//# sourceMappingURL=users.service.js.map