import { Test, TestingModule } from '@nestjs/testing';
import { DatabasenestService } from './databasenest.service';

describe('DatabasenestService', () => {
  let service: DatabasenestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabasenestService],
    }).compile();

    service = module.get<DatabasenestService>(DatabasenestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
