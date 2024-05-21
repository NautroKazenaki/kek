import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ProductsInDevelopmentService} from "./productsInDevelopment.service";

@Controller('productsInDevelopment')
export class ProductsInDevelopmentController {
    constructor(private readonly productsInDevelopmentService: ProductsInDevelopmentService) {}

    @Post()
    setManfuctaringData(@Body() body: any) {
        return this.productsInDevelopmentService.setManfuctaringData(body);
    }

    @Get()
    getManfuctaringData() {
        return this.productsInDevelopmentService.getManfuctaringData();
    }

    @Put(':id/phase')
    updatePhase(@Param('id') id: any, @Body('phase') phase: number) {
        return this.productsInDevelopmentService.updatePhase(id, phase);
    }

    @Put(':id')
    setEndDate(@Param('id') id: any, @Body() manufacturingData: any) {
        return this.productsInDevelopmentService.setEndDate(id, manufacturingData);
    }

    @Put(':id/comment')
    setComments(@Param('id') id: any, @Body() body: any) {
        return this.productsInDevelopmentService.setComment(id, body);
    }
}