import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  calculateSalePrice(item){
    let salePrice = item.price - (item.offer / 100) * item.price
    item.salePrice = salePrice
    return item
  }
}
