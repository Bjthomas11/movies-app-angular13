import { Movie } from './../../../../core/models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Movie | null = null;
  constructor() {}

  ngOnInit(): void {}
}
