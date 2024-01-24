import { Test, TestingModule } from '@nestjs/testing';
import { UserStackController } from './user-stack.controller';
import { UserStackService } from './user-stack.service';

describe('UserStackController', () => {
  let controller: UserStackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserStackController],
      providers: [UserStackService],
    }).compile();

    controller = module.get<UserStackController>(UserStackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
