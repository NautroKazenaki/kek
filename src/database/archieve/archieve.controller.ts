import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ArchieveService} from "./archieve.service";

@Controller('archieve')
export class ArchieveController {
    constructor(private readonly archieveService: ArchieveService) {}

    @Post('image')
    async scanImage(@Body() body: any) {
        return await this.archieveService.scanImage(body)
    }
}