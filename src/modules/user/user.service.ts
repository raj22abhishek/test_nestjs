import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplement } from '../../entity/supplement.entity';
import { User } from '../../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Supplement)
    private supplementRepository: Repository<Supplement>,
  ) {}

  async getTesting(): Promise<Supplement[]> {
    return await this.supplementRepository.find();
  }
  async getTesting2(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
