import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async getProducts(): Promise<any[]> {
        return this.productsService.getProducts();
    }

    @Post()
    async addProduct(@Body() body: any): Promise<any[]> {
        return await this.productsService.addProduct(body)
    }

    @Post('excel')
    async addProductFromExcel(@Body() body: any): Promise<void> {
        await this.productsService.addProductFromExcel(body)
    }

    @Put(':selectedName')
    async updateProduct(@Param('selectedName') selectedName: string, @Body() body: any): Promise<any[]> {
        return await this.productsService.updateProduct(selectedName, body)
    }
}