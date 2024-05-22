import { ArchieveService } from "./archieve.service";
export declare class ArchieveController {
    private readonly archieveService;
    constructor(archieveService: ArchieveService);
    scanImage(body: any): Promise<{
        result: string;
    }>;
}
