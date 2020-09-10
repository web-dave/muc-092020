import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mouse-position',
  templateUrl: './mouse-position.component.html',
  styles: [],
})
export class MousePositionComponent implements OnInit {
  @Input() x: number = 0;
  y: number = 0;
  r: number = 0;
  g: number = 0;
  b: number = -10;

  constructor() {}

  ngOnInit(): void {}

  mouseMoved(e: MouseEvent) {
    console.log(e);

    this.x = e.x;
    this.y = e.y;
  }
  range(e: { value: number; key: 'r' | 'g' | 'b' }) {
    console.log(e);
    this[e.key] = e.value;
  }

  getColor() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
}
