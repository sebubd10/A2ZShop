import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-mixed',
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.css']
})
export class MixedComponent implements OnInit {

  message: string = 'Welcome To Angular Video';
  isWeekend: boolean = false;
  greetingStyles = { 'font-size': '25px', 'font-weight': 'bold' };

  colors:string[]=["Green","Red","Blue","White"];
  removedColor:string='';
  removedIndex:number=-1;

  constructor() { }

  ngOnInit(): void {

  }


  updateMessage(param: string) {
    this.message = param;
  }

  removeColor(index:number):void{
    if(index>=0 && index<=(this.colors.length-1)){
      this.removedColor=this.colors[index];
      this.colors.splice(index,1);
      this.removedIndex=index;
    }else{
      alert("Invalid Index Value");
    }
  }

  changeFontSize(size:number):void{
    $("#idLabel").css({'font-size':size+'px'});
  }

}
