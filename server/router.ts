import { BaseRouter } from '@core/base.router';
import { ExampleRouter } from './example/example.router';
import { PreviousDocRouter } from './previousDoc/previousDoc.router';

export class RootRouter extends BaseRouter {
  protected async didInit() {
    this.router.use('/example', await ExampleRouter.getRouter());
    this.router.use('/PreviousDoc', await PreviousDocRouter.getRouter());
  }
}
