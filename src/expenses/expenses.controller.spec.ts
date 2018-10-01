import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesController } from './expenses.controller';

describe('Expenses Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ExpensesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ExpensesController = module.get<ExpensesController>(ExpensesController);
    expect(controller).toBeDefined();
  });
});
