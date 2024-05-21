import { ProductsInDevelopmentService } from "./productsInDevelopment.service";
export declare class ProductsInDevelopmentController {
    private readonly productsInDevelopmentService;
    constructor(productsInDevelopmentService: ProductsInDevelopmentService);
    setManfuctaringData(body: any): Promise<void>;
    getManfuctaringData(): Promise<any[]>;
    updatePhase(id: any, phase: number): Promise<void>;
    setEndDate(id: any, manufacturingData: any): Promise<void>;
    setComments(id: any, body: any): Promise<void>;
}
