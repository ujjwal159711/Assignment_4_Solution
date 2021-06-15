import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrOdd:number[]=[];
  arrEven:number[]=[];

  onIntervalOver(num){
  //  console.log(num);
    if(num%2===0){
      this.arrEven.push(num);
    }
    else{
      this.arrOdd.push(num);
    }
  }

}
