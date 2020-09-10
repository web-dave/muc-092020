import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styles: [],
})
export class TitleBoxComponent implements OnInit {
  @Input() ping: string;
  @Output() pong = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  boing() {
    this.pong.emit('BOOOOOOM');
  }
}
