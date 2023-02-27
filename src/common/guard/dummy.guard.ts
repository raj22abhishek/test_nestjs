import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SessionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateSession(request);
  }
}
async function validateSession(request: any): Promise<any> {
  let existingTime = false;
  if (request.url === '/helloworld') existingTime = true;
  if (request?.key == 'Some valid condition') {
    existingTime = true;
  } else {
    //wrong condition
    return;
  }
  return true;
}
