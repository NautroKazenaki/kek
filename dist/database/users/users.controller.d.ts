import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    loginUser(userData: {
        name: string;
        password: string;
    }): Promise<void>;
    findAll(): Promise<any[]>;
}
