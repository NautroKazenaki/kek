import { AcceptanceService } from "./acceptance.service";
export declare class AcceptanceController {
    private readonly acceptanceService;
    constructor(acceptanceService: AcceptanceService);
    addStuff(body: any): Promise<any[]>;
    getAcceptanceData(): Promise<any[]>;
}
