import { ProductsInDevelopmentService } from "./productsInDevelopment.service";
export declare class ProductsInDevelopmentController {
    private readonly productsInDevelopmentService;
    constructor(productsInDevelopmentService: ProductsInDevelopmentService);
    setManfuctaringData(body: any): Promise<void>;
}
