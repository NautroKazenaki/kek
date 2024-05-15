import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProvidersService} from "./providers.service";

@Controller('providers')
export class ProvidersController {
    constructor(private readonly providersService: ProvidersService) {}

    @Get()
    async getAllProviders(): Promise<any[]> {
        return await this.providersService.getAllProviders();
    }

    @Post()
    async addProvider(@Body() body: { trimmedName: string }): Promise<void> {
        await this.providersService.addProvider(body.trimmedName)
    }
}