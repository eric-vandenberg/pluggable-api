import { Request } from 'express';

import { IController } from '../http/controllers/controller.interface';
import { IHttpRequest } from '../http/common/request.interface';
import { IHttpResponse } from '../http/common/response.interface';
import { HttpRequest } from '../http/common/implementations/http.request';

export async function requestAdapter(
  request: Request,
  controller: IController
): Promise<IHttpResponse> {
  const httpRequest: IHttpRequest = new HttpRequest({
    header: request.header,
    body: request.body,
    query: request.query,
    path: request.params,
  });
  const response: IHttpResponse = await controller.handle(httpRequest);

  return response;
}
