import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent { 
  allowClick = false;

 UserName = document.getElementById('input');

  constructor() {
  

  }

}
