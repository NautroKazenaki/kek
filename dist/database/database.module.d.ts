import { OnModuleInit } from "@nestjs/common";
import { DatabaseService } from "./database.service";
export declare class DatabaseModule implements OnModuleInit {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    onModuleInit(): Promise<void>;
}
