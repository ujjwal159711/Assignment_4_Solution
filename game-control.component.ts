import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  @Output() intervalOver = new EventEmitter<number>();
  last = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.interval=setInterval(() => {
      this.intervalOver.emit(this.last + 1);
      this.last++;
    },1000);
  }

  onStop(){
    clearInterval(this.interval);
  }

}
