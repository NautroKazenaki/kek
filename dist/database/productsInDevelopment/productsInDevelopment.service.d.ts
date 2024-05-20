import { DatabaseService } from "../database.service";
export declare class ProductsInDevelopmentService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    setManfuctaringData(body: any): Promise<void>;
}
