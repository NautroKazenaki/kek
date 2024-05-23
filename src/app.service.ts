import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // getSert() {
  //   return '../qr-code-ten-gules.vercel.app_AIhdD8_privatekey.key'
  // }
}
