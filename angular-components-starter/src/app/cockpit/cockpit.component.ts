import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Server } from '../models/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverContent:string = "";
  @ViewChild('serverContentElement') serverContentElement: ElementRef;
  @Input() servers: Server[] = [];
  @Output() serverEvent = new EventEmitter<Server>();

  constructor() { }

  ngOnInit(): void {
  }

  addServer(serverNameElement: HTMLInputElement){
    this.serverEvent.emit(new Server(serverNameElement.value, this.serverContentElement.nativeElement.value, 'server'));
  }

  addServerBlueprint(serverNameElement: HTMLInputElement){
    this.serverEvent.emit(new Server(serverNameElement.value, this.serverContentElement.nativeElement.value, 'blueprint'));
  }
}
