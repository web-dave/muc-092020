import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styles: [],
})
export class RangeComponent {
  @Input() key: 'r' | 'g' | 'b';
  @Input() value: number;
  @Output() change = new EventEmitter<{
    value: number;
    key: 'r' | 'g' | 'b';
  }>();
  constructor() {}

  range(e) {
    this.value = e.target.value;
    this.change.emit({ value: this.value, key: this.key });
  }
}
