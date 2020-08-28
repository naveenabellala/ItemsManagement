import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemownerService } from 'src/app/services/itemowner.service';

@Component({
  selector: 'app-getitems',
  templateUrl: './getitems.component.html',
  styleUrls: ['./getitems.component.css']
})
export class GetitemsComponent implements OnInit {

  pageTitle : string = 'List of Items';
  items : Item[];
  errorMessage = '';

  constructor(private service : ItemownerService) { }

  ngOnInit(): void {
    console.log("in Items");
    this.service.getItems().subscribe({
      next: items => {
        this.items = items;
        
      },
      error: err => this.errorMessage = err
    });

  }

  deleteItem(itemId : number){
    this.service.deleteItem(itemId).subscribe(res => {
      
      window.location.reload(); 
      console.log('Deleted successfully');     
    });
  }

}
