import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemownerService } from 'src/app/services/itemowner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../item/item';

@Component({
  selector: 'app-addowner',
  templateUrl: './addowner.component.html',
  styleUrls: ['./addowner.component.css']
})
export class AddownerComponent implements OnInit {

  pageTitle : string = 'Add Owner';
  myForm : FormGroup;
  owner : Owner;
  item : Item;
  submitted = false;
  itemArr: Item[] = [];
  default: string ; 
  enableMe:boolean=false;

  constructor(private service : ItemownerService,private route : ActivatedRoute,private router : Router,
    private fb: FormBuilder) { }

  
    fetchItems(){
      let obj = this.service.getItems();
      obj
        .subscribe((data) => {
          for(let a of data){
            let obj = new Item(a.itemId,a.model,a.company);
            this.itemArr.push(obj);
            this.default = this.itemArr[0].model;
          }
         
        })
    }

    

  ngOnInit(): void {
    this.fetchItems();

    this.myForm = this.fb.group({
      ownerId : ['', [Validators.required]],
      ownerName :  ['', [Validators.required]],
      ownerLocation: ['',[Validators.required]],      
      items : ['', [Validators.required]]
     
    })
    this.myForm.controls['items'].setValue(this.default, {onlySelf: true});
  }

  get f() { return this.myForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
    let ownerId = this.myForm.get('ownerId').value;
    let ownerName = this.myForm.get('ownerName').value;
    let ownerLocation = this.myForm.get('ownerLocation').value;
    let item = this.myForm.get('items').value;
    
    let obj = this.service.createOwner(ownerId, ownerName, ownerLocation, item.itemId);
    obj.
        subscribe((data)=>{
          alert("Owner Added Successfully.");
          this.router.navigate(['getowners']);
        })
  }

}
