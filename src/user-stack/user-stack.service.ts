import { Injectable } from '@nestjs/common';
import { CreateUserStackDto } from './dto/create-user-stack.dto';
import { UpdateUserStackDto } from './dto/update-user-stack.dto';

@Injectable()
export class UserStackService {
  create(createUserStackDto: CreateUserStackDto) {
    return 'This action adds a new userStack';
  }

  findAll() {
    return `This action returns all userStack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userStack`;
  }

  update(id: number, updateUserStackDto: UpdateUserStackDto) {
    return `This action updates a #${id} userStack`;
  }

  remove(id: number) {
    return `This action removes a #${id} userStack`;
  }
}
