import { DatabaseService } from "../database.service";
export declare class ProductsInDevelopmentService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    setManfuctaringData(body: any): Promise<void>;
    getManfuctaringData(): Promise<any[]>;
    updatePhase(id: any, phase: number): Promise<void>;
    setEndDate(id: any, manufacturingData: any): Promise<void>;
    setComment(id: any, body: any): Promise<void>;
}
