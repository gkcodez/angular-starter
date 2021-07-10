import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGameEvent: EventEmitter<number> = new EventEmitter();
  gameDuration: number = 0;
  gameInterval: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.gameInterval = setInterval(() => {
      this.gameDuration++;
      this.startGameEvent.emit(this.gameDuration)
    }, 1000)
  }

  stopGame(){
    clearInterval(this.gameInterval);
  }

}
