import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ProductsInDevelopmentService} from "./productsInDevelopment.service";

@Controller('productsInDevelopment')
export class ProductsInDevelopmentController {
    constructor(private readonly productsInDevelopmentService: ProductsInDevelopmentService) {}

    @Post()
    setManfuctaringData(@Body() body: any) {
        return this.productsInDevelopmentService.setManfuctaringData(body);
    }
}