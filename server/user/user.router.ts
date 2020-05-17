import { BaseRouter } from '@core/base.router';
import { UserService } from './user.service';
import { inject } from '@core/base.module';

export class UserRouter extends BaseRouter {
  service = inject(UserService);

  registerRoutes() {
    this.router.post('/signup', this.signupUser.bind(this));
  }

  async signupUser(req, res) {
    const { email, password } = req.body;
    // await this.service.saveUser({ email, password });
    res.json({ msg: 'Signup Success!', status: 'success' });
  }
}
