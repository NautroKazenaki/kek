import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    loginUser(userData: {
<<<<<<< HEAD
        email: string;
=======
        name: string;
>>>>>>> e23d328f959b2fe93e4378c43d0382638adad044
        password: string;
    }): Promise<void>;
    findAll(): Promise<any[]>;
}
