import { Test, TestingModule } from '@nestjs/testing';
import { CloudantService } from './cloudant.service';

describe('CloudantService', () => {
  let service: CloudantService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudantService],
    }).compile();
    service = module.get<CloudantService>(CloudantService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
