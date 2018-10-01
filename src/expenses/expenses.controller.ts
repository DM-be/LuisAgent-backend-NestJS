import { CloudantService } from './../services/cloudant.service';
import { Controller, Get, Post } from '@nestjs/common';


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
    addExpense(){

    }

}
