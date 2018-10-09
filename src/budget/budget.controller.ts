import { Budget } from './../models/Budget';
import { Controller, Get, Param } from '@nestjs/common';
import { CloudantService } from 'services/cloudant.service';

@Controller('budget')
export class BudgetController {
    constructor(private cloudantService: CloudantService) {
    }
    @Get()
    async getBudgetNames(): Promise<string []> {
        return this.cloudantService.getBudgetNames();
    }

    @Get(':categoryName')
    async getBalance(@Param('categoryName') categoryName ): Promise<Budget> {
        return this.cloudantService.getBudget(categoryName);    
    }

}
    