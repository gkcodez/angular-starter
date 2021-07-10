import { Component } from '@angular/core';
import { Account } from './models/account';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-services-introduction';

  accounts: Account[] = [];
  constructor(private accountService: AccountService) { }

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
}
