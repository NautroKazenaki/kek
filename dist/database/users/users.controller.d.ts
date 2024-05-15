import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    loginUser(userData: {
        name: string;
        password: string;
    }): Promise<void>;
    addUser(name: string, userData: {
        password: string;
        level: number;
    }): Promise<void>;
    deleteUser(name: string): Promise<void>;
    findAll(): Promise<any[]>;
}
