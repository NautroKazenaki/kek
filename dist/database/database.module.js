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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const sqlite3 = require("sqlite3");
const database_service_1 = require("./database.service");
let DatabaseModule = class DatabaseModule {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async onModuleInit() {
        const db = new sqlite3.Database('database.db');
        db.serialize(() => {
            db.run(`
            CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY,
              name TEXT,
              password TEXT,
              level INTEGER
            )
          `),
                db.run(`
          CREATE TABLE IF NOT EXISTS providers (
            id INTEGER PRIMARY KEY,
            name TEXT, 
            error_count INTEGER)
          `),
                db.run(`
          CREATE TABLE IF NOT EXISTS AcceptanceDB (
            id INTEGER PRIMARY KEY,
            userName TEXT,
            date TEXT,
            productName TEXT,
            quantity INTEGER,
            provider TEXT,
            acceptanceNumber INTEGER
          )
        `),
                db.run(`
          CREATE TABLE IF NOT EXISTS Details (
            id INTEGER PRIMARY KEY,
            detailName TEXT,
            quantity INTEGER,
            provider TEXT,
            included TEXT
          )
        `),
                db.run(`
        CREATE TABLE IF NOT EXISTS Products (
          id INTEGER PRIMARY KEY,
          productName TEXT,
          includedDetails TEXT,
          createLimit INTEGER
      )
        `);
        });
    }
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [database_service_1.DatabaseService],
        exports: [database_service_1.DatabaseService],
    }),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseModule);
//# sourceMappingURL=database.module.js.map