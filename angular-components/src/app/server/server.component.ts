import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../models/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input('serverName') server: Server = new Server('', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
