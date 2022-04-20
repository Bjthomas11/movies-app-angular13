import { Movie } from './../../../core/models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() movies: Movie[] = [];
  constructor() {}

  ngOnInit(): void {}
}
