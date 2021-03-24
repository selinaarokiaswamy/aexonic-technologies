import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FrontBannerComponent } from './front-banner/front-banner.component';
import { ItemOffersComponent } from './item-offers/item-offers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { MatTableModule } from '@angular/material/table'
import {  MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [HomeComponent, FrontBannerComponent, ItemOffersComponent, CartComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    CoreModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports: [
    FrontBannerComponent,
    ItemOffersComponent
  ]
})
export class HomeModule { }
