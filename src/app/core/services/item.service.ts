import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { ItemListModel } from '../models/itemList.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsListCart: BehaviorSubject<ItemListModel[]> = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
  ) { }

  getItemsList(): Observable<ItemListModel[]>{
    return this.http.get<ItemListModel[]>('https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7')

  }
  calculateDiscount(item){
    // console.log(price);
    if(item.price <= 100){
      item.discountPrice = item.price
      item.discountPercent = 0
      return item
    }else if(item.price >= 101 && item.price <= 500){
      item.discountPrice = item.price - ((item.price * 10) /100)
      item.discountPercent = 10
      return item
    }
    if(item.price > 500){
      item.discountPrice = item.price - ((item.price * 20) /100)
      item.discountPercent = 20
      return item
    }
  }
}
