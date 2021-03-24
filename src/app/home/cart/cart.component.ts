import { ItemService } from './../../core/services/item.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ItemListModel } from 'src/app/core/models/itemList.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit {
  selectedItems: Array<ItemListModel> = []
  totalPrice: number
  dataSource: MatTableDataSource<ItemListModel>;
  displayedColumns: string[] = [
    "id",
    "name",
    "price",
    "discountPrice",
    "discountPercent",
    "actions"
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemService.itemsListCart.subscribe(data => {
      // console.log(data);
      if(data.length == 0){
        this.router.navigate(['/'])

      }else{
        this.totalPrice = data.reduce((prev, cur) => prev + cur.discountPrice, 0);
        this.selectedItems = data
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
      // console.log(this.totalPrice);
    })


  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;

  }

  removeElement(element){
    this.selectedItems = this.selectedItems.filter(item => item.id !== element.id)
    this.totalPrice = this.selectedItems.reduce((prev, cur) => prev + cur.discountPrice, 0);
    this.dataSource = new MatTableDataSource(this.selectedItems);
    this.itemService.itemsListCart.next(this.selectedItems)

  }

  clearCart(){
    this.itemService.itemsListCart.next([])
    this.totalPrice = 0
    this.dataSource = new MatTableDataSource([]);
  }

}
