import { ProvidersService } from "./providers.service";
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
    getAllProviders(): Promise<any[]>;
    addProvider(body: {
        trimmedName: string;
    }): Promise<void>;
}
