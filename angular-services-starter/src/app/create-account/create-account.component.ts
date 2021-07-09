import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account = new Account('', '');
  isValidAccount: boolean = false;

  constructor(private accountService: AccountService,) { }

  ngOnInit(): void {
  }

  addAccount(){
    this.accountService.addAccount(this.account);
  }

  validateAccount(){
    if(this.account.name && this.account.status){
      this.isValidAccount = true;
    }
  }
}
