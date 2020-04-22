import {Injectable, HttpException, HttpStatus} from '@nestjs/common';
import {App} from './App';

@Injectable()
export class AppsService {
  private readonly apps: App[] = [
    new App({
      id: '1',
      name: 'Some app',
      description: 'Some description',
      author: 'Some company',
    }),
    new App({
      id: '2',
      name: 'Some other app',
      description: 'Some other description',
      author: 'Some other company',
    }),
  ];

  findAll(): App[] {
    return this.apps;
  }

  findOne(id: string): App {
    const app: App | undefined = this.apps.find(
        (app: App): boolean => app.id === id,
    );

    if (!app) {
      throw new HttpException('There is no app with that id.', HttpStatus.NOT_FOUND);
    }

    return app;
  }
}
