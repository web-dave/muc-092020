import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styles: [],
})
export class InfoBoxComponent implements OnInit {
  isHidden: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
