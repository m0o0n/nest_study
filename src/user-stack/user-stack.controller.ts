import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserStackService } from './user-stack.service';
import { CreateUserStackDto } from './dto/create-user-stack.dto';
import { UpdateUserStackDto } from './dto/update-user-stack.dto';

@Controller('user-stack')
export class UserStackController {
  constructor(private readonly userStackService: UserStackService) {}

  @Post()
  create(@Body() createUserStackDto: CreateUserStackDto) {
    return this.userStackService.create(createUserStackDto);
  }

  @Get()
  findAll() {
    return this.userStackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userStackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserStackDto: UpdateUserStackDto) {
    return this.userStackService.update(+id, updateUserStackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userStackService.remove(+id);
  }
}
