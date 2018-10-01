

export class Transaction {
    /**
     *
     */
        // logs any transaction


    public amount: number;
    public sendingAccountName: string;
    public recievingAccountName: string; 
    public transactionDate: string;
    public operation: string;
    public uniqId: string;
    constructor(amount: number, sendingAccountName: string, recievingAccountName: string, operation: string, transactionDate? : string, uniqId?: string) {
        this.amount = amount;
        this.sendingAccountName = sendingAccountName;
        this.recievingAccountName = recievingAccountName;
        this.operation = operation;
        if(transactionDate)
        {
            this.transactionDate = transactionDate;
        }
        if(uniqId)
        {
            this.uniqId = uniqId;
        }
    }

    public getUniqId(): string 
    {
        return this.uniqId;
    }

    public getSendingAccountName() : string{
        return this.sendingAccountName;
    }

    public getRecievingAccountName(): string {
        return this.recievingAccountName;
    }
    
    public getOperation(): string {
        return this.operation;
    }

    public getAmount(): number  {
        return this.amount;
    }



}