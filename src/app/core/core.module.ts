import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './utils/item-card/item-card.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ItemCardComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ItemCardComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
