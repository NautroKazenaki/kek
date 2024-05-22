import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {DetailsService} from "./details.service";

@Controller('details')
export class DetailsController {
    constructor(private readonly detailsService: DetailsService) {}

    @Post()
    async addDetail(@Body() body: any): Promise<void> {
        return await this.detailsService.addDetail(body)
    }

    @Get()
    async getDetails(): Promise<any[]> {
        return await this.detailsService.getDetails()
    }

    @Put(':detailName')
    async updateDetailQuantity( @Param('detailName') detailName: string, @Body() body: any): Promise<void> {
        console.log(body)
        return await this.detailsService.updateDetailQuantity(detailName, body)
    }
}