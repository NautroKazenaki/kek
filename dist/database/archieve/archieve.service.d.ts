import { DatabaseService } from "../database.service";
export declare class ArchieveService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    scanImage(body: any): Promise<{
        result: string;
    }>;
}
