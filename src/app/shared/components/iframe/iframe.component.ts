import { Component, Input, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'comp-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;
  @Input() title: string = '';

  constructor(private domSanitizer: DomSanitizer) {}

  getSafeURL(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {}
}
