import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styles: [],
})
export class TitleBoxComponent implements OnInit {
  @Input() ping: string;
  constructor() {}

  ngOnInit(): void {}
}
