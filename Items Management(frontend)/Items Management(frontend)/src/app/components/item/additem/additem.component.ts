import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../item';
import { ItemownerService } from 'src/app/services/itemowner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  pageTitle : string = 'Add Item';
  myForm : FormGroup;
  item : Item;

  constructor(private service : ItemownerService,
    private route : ActivatedRoute,
    private router : Router,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.myForm = this.fb.group({
        model: ['', Validators.required ],
        company: ['', Validators.required ]
        
      });           
    }

    saveItem() : void {
      const p = { ...this.item, ...this.myForm.value };
      this.service.createItem(p).subscribe( res => {
        
        console.log("added");
        alert("added successfully");
        this.router.navigate(['/getitems']);
      });
    }

  ngOnInit(): void {
  }

}
