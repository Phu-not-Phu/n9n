import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      ` 
      Request... 
      User Agent: ${req.get('user-agent')} 
      Method: ${req.method} 
      Path: ${req.originalUrl} 
      Body: ${JSON.stringify(req.body)} 
      `,
    );
    next();
  }
}
