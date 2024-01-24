import { Test, TestingModule } from '@nestjs/testing';
import { UserStackService } from './user-stack.service';

describe('UserStackService', () => {
  let service: UserStackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserStackService],
    }).compile();

    service = module.get<UserStackService>(UserStackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
