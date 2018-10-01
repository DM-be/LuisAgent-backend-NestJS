import { Module, HttpModule  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesController } from './expenses/expenses.controller';
import { CloudantService } from './services/cloudant.service';
import { AccountsController } from './accounts/accounts.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ExpensesController, AccountsController],
  providers: [AppService, CloudantService],
})
export class AppModule {}
