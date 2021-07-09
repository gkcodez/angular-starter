import { Component } from '@angular/core';
import { Server } from './models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-components-deepdive';
  servers: Server[] = [];

  timeArray: number[] = [];

  onServerAdded(server: Server){
    this.servers.push(server);
  }

  addTime(seconds: number){
    this.timeArray.push(seconds);
  }
}
