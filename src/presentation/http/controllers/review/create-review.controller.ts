import { ResponseDTO } from '../../../../domain/dtos/response.dto';
import { ICreateReviewUseCase } from '../../../../application/useCases/review/create-review.interface';
import { IHttpError } from '../../common/error.interface';
import { IHttpRequest } from '../../common/request.interface';
import { IHttpResponse } from '../../common/response.interface';
import { IHttpSuccess } from '../../common/success.interface';
import { HttpError } from '../../common/implementations/http.error';
import { HttpResponse } from '../../common/implementations/http.response';
import { HttpSuccess } from '../../common/implementations/http.success';
import { IController } from '../controller.interface';
import { IParams } from './platform-params.interface';

export class CreateReviewController implements IController {
  constructor(
    private createReviewUseCase: ICreateReviewUseCase,
    private httpErrors: IHttpError = new HttpError(),
    private httpSuccess: IHttpSuccess = new HttpSuccess()
  ) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    let error;
    let response: ResponseDTO;
    let success;

    const params: IParams = httpRequest.path as IParams;

    try {
      if (
        params.platformId &&
        httpRequest.body &&
        Object.keys(httpRequest.body).length > 0
      ) {
        const bodyParams = Object.keys(httpRequest.body);

        console.log(httpRequest.body);

        if (
          bodyParams.includes('title') &&
          bodyParams.includes('rating') &&
          bodyParams.includes('description')
        ) {
          const createUserRequestDTO = httpRequest.body as {
            title: string;
            rating: number;
            description: string;
          };

          response = await this.createReviewUseCase.execute(
            params.platformId,
            createUserRequestDTO
          );
        } else {
          error = this.httpErrors.unprocessableEntity();
          return new HttpResponse(error.statusCode, error.body);
        }

        if (!response.success) {
          error = this.httpErrors.badRequest();
          return new HttpResponse(error.statusCode, response.data);
        }

        success = this.httpSuccess.created(response.data);
        return new HttpResponse(success.statusCode, success.body);
      }

      error = this.httpErrors.badRequest();
      return new HttpResponse(error.statusCode, error.body);
    } catch (err: unknown) {
      error = this.httpErrors.internalServerError();
      return new HttpResponse(error.statusCode, error.body);
    }
  }
}
