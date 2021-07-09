import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  // allowNewServer:boolean = false;
  // serverStatusText:string = 'No Logs Yet!';
  // serverName = 'Test Server';
  // username:string = 'test';
  // isValidUserName: boolean;
  // isValidServer: boolean = false;
  isDetailsVisible: boolean = false;
  timeStampArray: Date[] = [];

  constructor() {
    // this.isValidUserName = this.username ? true : false;
    // this.isValidServer = this.serverName ? true : false;

    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000)
  }

  ngOnInit(): void {
  }

  // onServerCreation(){
  //   this.isValidServer =  this.serverName ? true : false;
  //   this.serverStatusText = 'A new server is created! Server name is ' + this.serverName;
  // }

  // onServerNameChange(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  // onUserNameChange(event: Event){
  //   this.isValidUserName = (<HTMLInputElement> event.target).value ? true : false;
  // }

  // addUserClick(){
  //   this.isValidUserName = false;
  //   this.username = '';
  // }

  toggleDetails() {
    this.timeStampArray.push(new Date());
    this.isDetailsVisible = !this.isDetailsVisible;

  }
}
