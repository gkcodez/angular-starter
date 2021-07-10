import { Injectable } from "@angular/core";
import { Account } from "../models/account";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    constructor(private logService: LoggingService){

    }
  
  accounts: Account[] = [
    new Account('Master Account', 'Active')
  ];

  addAccount(newAccount: Account) {
    this.accounts.push(newAccount);
    this.logService.logAddAccount(newAccount); 
  }

  deleteAccount(account: Account) {
    this.accounts.splice(this.accounts.indexOf(account), 1);
    this.logService.logDeletion(account); 

  }

  changeStatus(account: Account) {
    this.accounts[this.accounts.indexOf(account)].status = account.status; 
    this.logService.logStatusChange(account); 
  }

}