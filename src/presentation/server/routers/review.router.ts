import { Request, Response, Router } from 'express';

import { requestAdapter } from '../../adapters/request.adapter';
import { getReviewsComposer } from '../../../infrastructure/composers/get-reviews.composer';
import { createReviewComposer } from '../../../infrastructure/composers/create-review.composer';

export class ReviewRoutes {
  static get routes(): Router {
    const router = Router();

    router.get(
      '/platform/:platformId/reviews',
      async (request: Request, response: Response) => {
        const adapter = await requestAdapter(request, getReviewsComposer());
        return response.status(adapter.statusCode).json(adapter.body);
      }
    );

    router.post(
      '/platform/:platformId/reviews',
      async (request: Request, response: Response) => {
        const adapter = await requestAdapter(request, createReviewComposer());
        return response.status(adapter.statusCode).json(adapter.body);
      }
    );

    return router;
  }
}
