import { DatabaseService } from '../database.service';
export declare class ProductsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getProducts(): Promise<any[]>;
    addProduct(body: any): Promise<any[]>;
    updateProduct(selectedName: string, body: any): Promise<any[]>;
    addProductFromExcel(body: any): Promise<void>;
    deleteProduct(id: string): Promise<void>;
    subtractDetails(body: any): Promise<void>;
    updateProductManufactured(body: any): Promise<void>;
}
