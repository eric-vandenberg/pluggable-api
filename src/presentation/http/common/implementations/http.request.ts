import { IHttpRequest } from '../request.interface';

export class HttpRequest implements IHttpRequest {
  public header?: unknown;
  public body?: unknown;
  public query?: unknown;
  public path?: unknown;

  constructor(init?: HttpRequest) {
    Object.assign(this, init);
  }
}
