import { Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async addDefaultUserIfNeeded(): Promise<void> {
        return await this.usersService.addDefaultUserIfNeeded()
    }

    @Get()
    async findAll(): Promise<any[]> {
        return await this.usersService.findAll()
    }
}