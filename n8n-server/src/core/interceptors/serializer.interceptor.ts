import { Injectable, ClassSerializerInterceptor } from '@nestjs/common';
import { ClassTransformOptions } from '@nestjs/common/interfaces/external/class-transform-options.interface';

@Injectable()
export class InterceptorForClassSerializer extends ClassSerializerInterceptor {
  serialize(response: any, options: ClassTransformOptions) {
    const rawDataJSON = JSON.stringify(response);
    return super.serialize(JSON.parse(rawDataJSON), options);
  }
}
