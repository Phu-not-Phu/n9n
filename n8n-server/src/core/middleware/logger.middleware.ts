import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let token = req.headers['authorization'];

    if (token) {
      token = token.split(' ')[1];
    }

    //https://stackoverflow.com/questions/43528123/visual-studio-code-debug-console-colors
    console.log(
      ` 
      \u001b[0m Request... 
      \u001b[0m User Agent: \u001b[1;32m  ${req.get('user-agent')} 
      \u001b[0m Token:\u001b[1;32m ${token}
      \u001b[0m Method: \u001b[1;33m ${req.method} 
      \u001b[0m Path: \u001b[1;34m${req.originalUrl} 
      \u001b[0m Body: \u001b[1;36m${JSON.stringify(req.body)} 
      `,
    );
    next();
  }
}
