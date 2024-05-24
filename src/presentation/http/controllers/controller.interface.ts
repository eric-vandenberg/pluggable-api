import { IHttpResponse } from '../common/response.interface';
import { HttpRequest } from '../common/implementations/http.request';

export interface IController {
  handle(httpRequest: HttpRequest): Promise<IHttpResponse>;
}
