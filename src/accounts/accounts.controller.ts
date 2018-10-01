import { CloudantService } from './../services/cloudant.service';
import { Controller, Get, Body, Param } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
    /**
     *
     */
    constructor(private cloudantService: CloudantService) {
    }
    @Get(':accountName')
    async getBalance(@Param('accountName') accountName ): Promise<number> {
        return this.cloudantService.getBalance(accountName);
    }
}

