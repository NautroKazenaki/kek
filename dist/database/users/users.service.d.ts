import { usersDto } from "./users.dto";
import { DatabaseService } from "../database.service";
export declare class UsersService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    addDefaultUserIfNeeded(): Promise<void>;
    addUser({ name, password, level }: usersDto): Promise<void>;
    findAll(): Promise<any[]>;
}
