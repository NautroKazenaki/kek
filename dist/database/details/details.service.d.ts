import { DatabaseService } from "../database.service";
export declare class DetailsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    addDetail(body: any): Promise<void>;
}
