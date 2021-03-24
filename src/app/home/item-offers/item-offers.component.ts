import { ItemService } from './../../core/services/item.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import * as dummyData from '../../core/data/item.json'
import moment from 'moment';
import range from 'moment-range'
import { ItemListModel } from 'src/app/core/models/itemList.model';
@Component({
  selector: 'app-item-offers',
  templateUrl: './item-offers.component.html',
  styleUrls: ['./item-offers.component.scss']
})
export class ItemOffersComponent implements OnInit {
items: Array<ItemListModel>
// showLoader = true
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.getItemsList()
    .subscribe(
      data => {
        data.map(i => {
          // console.log(i)
          i = this.itemService.calculateDiscount(i)
        })
        // console.log(data)
        this.items = data
      }
    )

  }

}
