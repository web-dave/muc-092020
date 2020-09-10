import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'muc092020';
  hurz(e: string) {
    console.log(e);
    this.title = e;
  }
}
