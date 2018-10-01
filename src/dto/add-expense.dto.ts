export class AddExpenseDto {
    readonly description: string;
    readonly categoryName: string;
    readonly cost: number;
    readonly usedAccountName: string;
  }
// todo: add date option in bot code, 'bought x yesterday'
// think about categoryName: none given: push to 'misc' prebuilt category? 
// --> more natural in bot conversation
