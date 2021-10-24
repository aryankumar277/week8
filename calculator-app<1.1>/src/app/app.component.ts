import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';

  counter=0;

  showNo() {
    this.counter+=1;
  }

  showYes() {
    this.counter+=1;
  }

  bgRed() {

  }

  bgGreen() {

  }

  bgBlue() {

  }

}

