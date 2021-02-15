import { ItemService } from './../../core/services/item.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import * as dummyData from '../../core/data/item.json'
import moment from 'moment';
import range from 'moment-range'
@Component({
  selector: 'app-item-offers',
  templateUrl: './item-offers.component.html',
  styleUrls: ['./item-offers.component.scss']
})
export class ItemOffersComponent implements OnInit {
items = dummyData.items
filteredItems = []
items$ = from(dummyData.items)
showLoader = true
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    console.log('Items ')
    console.log(this.items)
    this.items$.pipe(
      map(item =>{

        let startDate = moment(item.start_time)
        let endDate = moment(item.end_time)
        let currentDateTime = moment()

        if (currentDateTime.isBetween(startDate, endDate)) {
          console.log('Exists')
          console.log(item)
          item = this.itemService.calculateSalePrice(item)
          this.filteredItems.push(item);
        }else{
          console.log('Not Exists')
          console.log(item)
        }
      })
    ).subscribe(data =>{

      this.showLoader = false
    })
  }

}
