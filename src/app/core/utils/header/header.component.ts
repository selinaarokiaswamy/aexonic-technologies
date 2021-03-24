import { ItemListModel } from './../../models/itemList.model';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedItems: Array<ItemListModel> = []
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

}
