import { DatabaseService } from "../database.service";
export declare class AcceptanceService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    addStuff(body: any): Promise<any[]>;
}
