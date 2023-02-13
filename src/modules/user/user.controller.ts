import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('supplement')
export class UserController {
  constructor(public usrService: UserService) {}
  @Get('/:type')
  getTesting(@Param('type') type: string) {
    return this.usrService.getTesting();
  }

  @Get('testing2')
  getTesting2(): any {
    return this.usrService.getTesting2();
  }
}
