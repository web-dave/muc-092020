import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-position',
  templateUrl: './mouse-position.component.html',
  styles: [],
})
export class MousePositionComponent implements OnInit {
  x: number = 0;
  y: number = 0;
  constructor() {}

  ngOnInit(): void {}

  mouseMoved(e: MouseEvent) {
    console.log(e);

    this.x = e.x;
    this.y = e.y;
  }
}
