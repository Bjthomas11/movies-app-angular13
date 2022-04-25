import { Item } from './item/Item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
