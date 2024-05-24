import { IHttpResponse } from './response.interface';

export interface IHttpError {
  unprocessableEntity(): IHttpResponse;
  badRequest(): IHttpResponse;
  notFound(): IHttpResponse;
  internalServerError(): IHttpResponse;
}
