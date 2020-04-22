import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): { hello: string } {
    return {
      hello: 'world',
    };
  }
}
