import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async loginUser(@Body() userData: { name: string; password: string }): Promise<void> {
        const { name, password } = userData;
        return await this.usersService.loginUser(name, password)
    }

    @Get()
    async findAll(): Promise<any[]> {
        return await this.usersService.findAll()
    }
}