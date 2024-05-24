import { IHttpResponse } from './response.interface';

export interface IHttpSuccess {
  ok(data?: any): IHttpResponse;
  created(data?: any): IHttpResponse;
}
