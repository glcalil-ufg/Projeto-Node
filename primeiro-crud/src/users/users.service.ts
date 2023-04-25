import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectKnex, Knex } from 'nestjs-knex';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise <User[] | null> {
    return await this.knex<User>('users').select();
  }

  async findOne(id: number): Promise <User[]> {
    return await this.knex<User>('users').select('id', 'nome', 'login').where('id','=',id);
  }

  update(id: number, updateUserDto: UpdateUserDto): string {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
