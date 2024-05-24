import { Router } from 'express';
import { ReviewRoutes } from './review.router';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/', ReviewRoutes.routes);

    return router;
  }
}
