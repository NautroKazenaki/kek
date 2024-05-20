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

    @Delete(':id')
    async deleteProduct(@Param('id') id: string): Promise<void> {
        return await this.productsService.deleteProduct(id)
    }
    @Post('subtract-details')
    async subtractDetails(@Body() body: any): Promise<void> {
        return this.productsService.subtractDetails(body)
    }

    @Post('update-product-manufactured')
    async updateProductManufactured(@Body() body: any): Promise<void> {
        return this.productsService.updateProductManufactured(body)
    }
}