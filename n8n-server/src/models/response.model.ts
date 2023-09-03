export interface Response<T> {
  code: number;
  data: T;
  error: Error;
}

export class HttpResponse {
  statusCode: number;
  data: any;
  error: Error;

  constructor(statusCode: number, data: any, error: Error = null) {
    this.statusCode = statusCode;
    this.data = data;
    this.error = error;
  }

  static ok(data: any) {
    return new HttpResponse(200, data);
  }

  static created(data: any) {
    return new HttpResponse(201, data);
  }

  static badRequest(data: any) {
    return new HttpResponse(400, data);
  }

  static unauthorized(data: any) {
    return new HttpResponse(401, data);
  }

  static forbidden(data: any) {
    return new HttpResponse(403, data);
  }

  static notFound(data: any) {
    return new HttpResponse(404, data);
  }

  static conflict(data: any) {
    return new HttpResponse(409, data);
  }

  static unprocessableEntity(data: any) {
    return new HttpResponse(422, data);
  }

  static internalServerError(data: any) {
    return new HttpResponse(500, data);
  }

  static serviceUnavailable(data: any) {
    return new HttpResponse(503, data);
  }

  static gatewayTimeout(data: any) {
    return new HttpResponse(504, data);
  }

  static custom(statusCode: number, data: any) {
    return new HttpResponse(statusCode, data);
  }
}
