import { Test, TestingModule } from '@nestjs/testing';
import { AccountsController } from './accounts.controller';

describe('Accounts Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AccountsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AccountsController = module.get<AccountsController>(AccountsController);
    expect(controller).toBeDefined();
  });
});
