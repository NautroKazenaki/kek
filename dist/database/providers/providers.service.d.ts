import { DatabaseService } from "../database.service";
export declare class ProvidersService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getAllProviders(): Promise<any[]>;
    addProvider(trimmedName: string): Promise<any>;
}
