import { Supplement } from './../../entity/supplement.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../../entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Supplement, User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
