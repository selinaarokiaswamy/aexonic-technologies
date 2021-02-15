import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FrontBannerComponent } from './front-banner/front-banner.component';
import { ItemOffersComponent } from './item-offers/item-offers.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [HomeComponent, FrontBannerComponent, ItemOffersComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    CoreModule
  ],
  exports: [
    FrontBannerComponent,
    ItemOffersComponent
  ]
})
export class HomeModule { }
