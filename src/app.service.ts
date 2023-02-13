import { Supplement } from './entity/supplement.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(User)
  //   private userRepository: Repository<User>,
  // ) {}

  getHello(): string {
    return 'Hello World!';
  }

  // async getTesting(): Promise<User[]> {
  //   return await this.userRepository.find();
  // }
}
