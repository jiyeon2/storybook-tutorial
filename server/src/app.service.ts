import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('het hellot');
    return 'Hello World!';
  }
}
