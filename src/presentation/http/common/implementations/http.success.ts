import { StatusCodes } from 'http-status-codes';
import { IHttpResponse } from '../response.interface';
import { IHttpSuccess } from '../success.interface';

export class HttpSuccess implements IHttpSuccess {
  ok(data?: any): IHttpResponse {
    return {
      statusCode: StatusCodes.OK,
      body: data,
    };
  }

  created(data?: any): IHttpResponse {
    return {
      statusCode: StatusCodes.CREATED,
      body: data,
    };
  }
}
