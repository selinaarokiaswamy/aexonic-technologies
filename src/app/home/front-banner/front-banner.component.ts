import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import * as dummyData from '../../core/data/item.json'
@Component({
  selector: 'app-front-banner',
  templateUrl: './front-banner.component.html',
  styleUrls: ['./front-banner.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1000, noPause: false, showIndicators: true } }
  ]
})
export class FrontBannerComponent implements OnInit {
  items = dummyData.items

  constructor() { }

  ngOnInit(): void {
    console.log('Front Banner Component')

  }

}
