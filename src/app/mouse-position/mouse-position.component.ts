import { Component, OnInit } from '@angular/core';
import { R3TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-mouse-position',
  templateUrl: './mouse-position.component.html',
  styles: [],
})
export class MousePositionComponent implements OnInit {
  x: number = 0;
  y: number = 0;
  r: number = 50;
  g: number = 50;
  b: number = 50;
  constructor() {}

  ngOnInit(): void {}

  mouseMoved(e: MouseEvent) {
    console.log(e);

    this.x = e.x;
    this.y = e.y;
  }
  range(e, c) {
    console.log(e.target.value);
    if (c === 'r') {
      this.r = e.target.value;
    } else if (c === 'g') {
      this.g = e.target.value;
    } else {
      this.b = e.target.value;
    }
  }

  getColor() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
}
