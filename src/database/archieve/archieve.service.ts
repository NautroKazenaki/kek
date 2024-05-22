import { Body, Injectable } from "@nestjs/common";
import { DatabaseService } from "../database.service";
import * as Jimp from 'jimp';
import * as qrCode from 'qrcode-reader';

@Injectable()
export class ArchieveService {
    constructor(private readonly databaseService: DatabaseService) {}

    async scanImage(@Body() body: any): Promise<{ result: string }> {
        try {
            // Remove 'data:image/png;base64,' or similar prefix from the base64 string if present
            const base64Data = body.image.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const image = await Jimp.read(buffer);
            const qr = new qrCode();

            return new Promise((resolve, reject) => {
                qr.callback = (err, value) => {
                    if (err) {
                        reject(err);
                    } else {
                        const result = value.result.substring(0, value.result.indexOf('|') + 1);
                        resolve({ result });
                    }
                };
                qr.decode(image.bitmap);
            });
        } catch (error) {
            throw new Error(`Error processing image: ${error.message}`);
        }
    }
}