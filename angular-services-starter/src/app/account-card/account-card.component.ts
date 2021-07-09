import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  @Input() account: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  changeStatus(status: string){
    this.account.status = status;
    this.accountService.changeStatus(this.account);
  }

  deleteAccount(){
    this.accountService.deleteAccount(this.account);
  }

}
