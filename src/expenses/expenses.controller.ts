import { AddExpenseDto } from './../dto/add-expense.dto';
import { CloudantService } from './../services/cloudant.service';
import { Controller, Get, Post, Body } from '@nestjs/common';


@Controller('expenses')
export class ExpensesController {
    
    /**
     *
     */
    constructor(private cloudantService: CloudantService) {
    }

    @Get()
    getExpenses(){
        return this.cloudantService.getMonthOverview('');
    }

    @Post() 
    async addExpense(@Body() addExpenseDto: AddExpenseDto){

        try {
            await this.cloudantService.addExpense(addExpenseDto);
        } catch (error) {
            console.log(error);
        }
        
        
    }

}
