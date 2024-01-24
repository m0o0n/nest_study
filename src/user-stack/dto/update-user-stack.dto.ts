import { PartialType } from '@nestjs/mapped-types';
import { CreateUserStackDto } from './create-user-stack.dto';

export class UpdateUserStackDto extends PartialType(CreateUserStackDto) {}
