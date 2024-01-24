import { Module } from '@nestjs/common';
import { UserStackService } from './user-stack.service';
import { UserStackController } from './user-stack.controller';

@Module({
  controllers: [UserStackController],
  providers: [UserStackService],
})
export class UserStackModule {}
