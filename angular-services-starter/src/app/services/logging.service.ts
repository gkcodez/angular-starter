import { Account } from "../models/account";

export class LoggingService {

    logAddAccount(account: Account){
        console.log(account.name + ' added with status ' + account.status);
    }

    logStatusChange(account: Account){
        console.log(account.name + ' status changed to ' + account.status);
    }

    logDeletion(account: Account) {
        console.log(account.name + ' deleted');
    }
}