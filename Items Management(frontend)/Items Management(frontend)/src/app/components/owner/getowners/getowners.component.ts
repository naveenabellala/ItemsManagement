import { Component, OnInit } from '@angular/core';
import { ItemownerService } from 'src/app/services/itemowner.service';
import { Owner } from '../owner';
import { Item } from '../../item/item';

@Component({
  selector: 'app-getowners',
  templateUrl: './getowners.component.html',
  styleUrls: ['./getowners.component.css']
})
export class GetownersComponent implements OnInit {

  pageTitle : string = 'List of Owners';
  items : Item[];

  
  owners : Owner[];
  errorMessage = '';

  constructor(private service : ItemownerService) { }

  ngOnInit(): void {

    console.log("in Owners");
    this.service.getOwners().subscribe({
      next: owners => {
        this.owners = owners;              
      },
      error: err => this.errorMessage = err
    });
  }

  deleteOwner(ownerId : number){
    this.service.deleteOwner(ownerId).subscribe(res => {
      
      window.location.reload(); 
      console.log('Owner Deleted successfully');     
    });
  }

}
