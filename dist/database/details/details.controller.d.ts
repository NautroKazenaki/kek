import { DetailsService } from "./details.service";
export declare class DetailsController {
    private readonly detailsService;
    constructor(detailsService: DetailsService);
    addDetail(body: any): Promise<void>;
    getDetails(): Promise<any[]>;
    updateDetailQuantity(detailName: string, body: any): Promise<void>;
}
