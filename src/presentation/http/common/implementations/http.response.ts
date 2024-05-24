import { IHttpResponse } from '../response.interface';

export class HttpResponse implements IHttpResponse {
  public statusCode: number;
  public body: Record<string, string>;

  constructor(statusCode: number, body: any) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
