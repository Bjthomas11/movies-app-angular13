import { Component, Input, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'comp-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;
  @Input() title: string = '';
  videoURL: SafeResourceUrl = '';

  constructor(private domSanitizer: DomSanitizer) {
    switch (this.site) {
      case 'YouTube':
        this.videoURL = this.getSafeURL(
          'https://www.youtube.com/embed/' + this.key
        );
        break;
      case 'Vimeo':
        this.videoURL = this.getSafeURL(
          'https://player.vimeo.com/video/' + this.key
        );
    }
  }

  getSafeURL(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {}
}
