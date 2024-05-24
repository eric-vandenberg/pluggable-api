import { IGetReviewsUseCase } from '../../../../application/useCases/review/get-reviews.interface';
import { IHttpError } from '../../common/error.interface';
import { IHttpRequest } from '../../common/request.interface';
import { IHttpResponse } from '../../common/response.interface';
import { IHttpSuccess } from '../../common/success.interface';
import { HttpError } from '../../common/implementations/http.error';
import { HttpResponse } from '../../common/implementations/http.response';
import { HttpSuccess } from '../../common/implementations/http.success';
import { IController } from '../controller.interface';
import { IParams } from './platform-params.interface';

export class GetReviewsController implements IController {
  constructor(
    private getReviewsUseCase: IGetReviewsUseCase,
    private httpErrors: IHttpError = new HttpError(),
    private httpSuccess: IHttpSuccess = new HttpSuccess()
  ) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    let error;
    let response;
    const params: IParams = httpRequest.path as IParams;

    try {
      if (params.platformId) {
        response = await this.getReviewsUseCase.execute(params.platformId);
      } else {
        error = this.httpErrors.unprocessableEntity();
        return new HttpResponse(error.statusCode, error.body);
      }

      if (!response.success) {
        error = this.httpErrors.notFound();
        return new HttpResponse(error.statusCode, response.data);
      }

      const success = this.httpSuccess.ok(response.data);
      return new HttpResponse(success.statusCode, success.body);
    } catch (err: unknown) {
      error = this.httpErrors.internalServerError();
      return new HttpResponse(error.statusCode, error.body);
    }
  }
}
