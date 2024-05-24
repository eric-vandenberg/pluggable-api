import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { IHttpError } from '../error.interface';
import { IHttpResponse } from '../response.interface';

export class HttpError implements IHttpError {
  unprocessableEntity(): IHttpResponse {
    return {
      statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
      body: { error: ReasonPhrases.UNPROCESSABLE_ENTITY },
    };
  }

  badRequest(): IHttpResponse {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      body: { error: ReasonPhrases.BAD_REQUEST },
    };
  }

  notFound(): IHttpResponse {
    return {
      statusCode: StatusCodes.NOT_FOUND,
      body: { error: ReasonPhrases.NOT_FOUND },
    };
  }

  internalServerError(): IHttpResponse {
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: { error: ReasonPhrases.INTERNAL_SERVER_ERROR },
    };
  }
}
