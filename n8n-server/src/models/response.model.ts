export interface Response<T> {
  code: number;
  data: T;
  error: Error;
}

export class HttpResponse {
  statusCode: number;
  data: any;
  error: {
    name: string;
    message: string;
  };

  constructor(statusCode: number, data: any, error: Error = null) {
    this.statusCode = statusCode;
    this.data = data;
    this.error = error
      ? {
          name: error.name,
          message: error.message,
        }
      : null;
  }

  static ok(data: any, error: Error = null) {
    return new HttpResponse(200, data, error);
  }

  static created(data: any, error: Error = null) {
    return new HttpResponse(201, data, error);
  }

  static badRequest(data: any, error: Error = null) {
    return new HttpResponse(400, data, error);
  }

  static unauthorized(data: any, error: Error = null) {
    return new HttpResponse(401, data, error);
  }

  static forbidden(data: any, error: Error = null) {
    return new HttpResponse(403, data, error);
  }

  static notFound(data: any, error: Error = null) {
    return new HttpResponse(404, data, error);
  }

  static conflict(data: any, error: Error = null) {
    return new HttpResponse(409, data, error);
  }

  static unprocessableEntity(data: any, error: Error = null) {
    return new HttpResponse(422, data, error);
  }

  static internalServerError(data: any, error: Error = null) {
    return new HttpResponse(500, data, error);
  }

  static serviceUnavailable(data: any, error: Error = null) {
    return new HttpResponse(503, data, error);
  }

  static gatewayTimeout(data: any, error: Error = null) {
    return new HttpResponse(504, data, error);
  }

  static custom(statusCode: number, data: any, error: Error = null) {
    return new HttpResponse(statusCode, data, error);
  }
}
