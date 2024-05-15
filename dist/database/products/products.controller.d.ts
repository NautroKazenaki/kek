import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<any[]>;
    addProduct(body: any): Promise<any[]>;
    addProductFromExcel(body: any): Promise<void>;
    updateProduct(selectedName: string, body: any): Promise<any[]>;
}
