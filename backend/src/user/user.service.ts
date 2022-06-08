import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm';
import { Repository } from 'typeorm';
import { UserNotFoundException } from '../exception/user-not-found.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getList(): Promise<User[]> {
    return this.userRepository.find();
  }

  async get(username: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ username });
  }

  async getById(id: number): Promise<User | UserNotFoundException> {
    const user = await this.userRepository.findOneBy({ id });
    if (user && user.id) {
      return user;
    } else {
      throw new UserNotFoundException();
    }
  }

  create(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
}
