import {Controller, Get} from '@nestjs/common';
import {AppService} from './AppService';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {
  }

  @Get()
  public getHello(): { hello: string } {
    return this.appService.getHello();
  }
}
