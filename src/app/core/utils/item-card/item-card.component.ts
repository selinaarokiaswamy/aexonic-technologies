import { ItemService } from './../../services/item.service';
import { ItemListModel } from './../../models/itemList.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
 @Input() items: Array<ItemListModel>
 selectedItems: Array<ItemListModel>
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.itemsListCart.subscribe(
      data => {
        // console.log(data)
        this.selectedItems = data
      }
    )
  }

  addToCart(item){
    this.selectedItems.push(item)
    this.itemService.itemsListCart.next(this.selectedItems)

  }

}
