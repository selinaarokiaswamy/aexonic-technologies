import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './utils/item-card/item-card.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [ItemCardComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    ItemCardComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
