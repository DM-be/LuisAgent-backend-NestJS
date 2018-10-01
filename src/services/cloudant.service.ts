import { Expense } from './../models/Expense';
import { AddExpenseDto } from './../dto/add-expense.dto';
import { MonthOverView } from './../models/MonthOverview';
import { Injectable, HttpService } from '@nestjs/common';
import * as Cloudant from '@cloudant/cloudant';
import * as moment from 'moment';

@Injectable()
export class CloudantService {
    /**
     *
     */

    private cloudant: any;
    private db;
    private username: string;
    private password: string; 
    
    constructor(private http: HttpService) {
        this.username = 'bdacf8d9-eac9-4a6f-bc3b-2ad16614d31d-bluemix';
        this.password = '142963408785f5c6fe057bd73c7e0db10527bd0003ab1b889bdf7421a3025c39';
        this.cloudant = Cloudant({account:this.username, password:this.password, plugins: [ 'promises' ]});
        this.db = this.cloudant.db.use('supertest$adennis2');
    }

    public showAllDbs() {
        return this.cloudant.db.list(function(err, allDbs) {
            console.log('All my databases: %s', allDbs.join(', '))
          });
    }

     public async getMonthOverview(id: string): Promise<MonthOverView>
    {
        let doc = await this.db.get('2018-08');
        return doc;
    }

    public async addExpense(addExpenseDto: AddExpenseDto): Promise<void>
    {
        let now = moment().format('YYYY-MM');
        let doc = await this.db.get(now);
        let monthOverview = new MonthOverView(doc._id, doc.accounts, doc.categories, doc._rev, doc.usedTags);
        let account = monthOverview.getAccByName(addExpenseDto.usedAccountName);
        account.updateFinalBalance('decrease', addExpenseDto.cost);
        let category = monthOverview.getCategoryByName(addExpenseDto.categoryName);
        let expense = new Expense(addExpenseDto.cost, addExpenseDto.description, now, addExpenseDto.usedAccountName, addExpenseDto.categoryName, category.getIconName());
        category.addExpense(expense);
        let budget = category.getBudget();
        budget.addToAmountSpentInBudget(expense.getCost()); 
        monthOverview.addTagsToUsedTags(expense.getTags());
        this.db.insert(monthOverview);
    }

}
