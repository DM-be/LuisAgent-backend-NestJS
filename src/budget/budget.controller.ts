import { CloudantService } from './../services/cloudant.service';

import { Budget } from './../models/Budget';
import { Controller, Get, Param } from '@nestjs/common';


@Controller('budget')
export class BudgetController {
    constructor(private cloudantService: CloudantService) {
    }
    @Get()
    async getBudgetNames(): Promise<string []> {
        return this.cloudantService.getCategoriesWithABudgetNames();
    }

    @Get(':categoryName')
    async getBalance(@Param('categoryName') categoryName ): Promise<Budget> {
        return this.cloudantService.getBudget(categoryName);    
    }

}
