import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {AcceptanceService} from "./acceptance.service";

@Controller('acceptance')
export class AcceptanceController {
    constructor(private readonly acceptanceService: AcceptanceService) {}

    @Post()
    async addStuff(@Body() body:any): Promise<any[]> {
        return await this.acceptanceService.addStuff(body)
    }
}