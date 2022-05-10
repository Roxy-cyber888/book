import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livre';
  display: boolean = false;
  field: string = '';

  OnPress(key: string) {
    this.display = true;
    this.field = key;
  }

  close() {
    this.display = false;
  }
}
