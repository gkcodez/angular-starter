import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'observables-beginner';
  activateSubscription = new Subscription;
  isActivated: boolean = false;

  constructor(private userService: UserService) { }
  ngOnInit(){
    this.userService.userActivated.subscribe((isActivated)=> {
      this.isActivated = isActivated;
    })
  }

  ngOnDestroy(){
    this.activateSubscription.unsubscribe();
  }
}
