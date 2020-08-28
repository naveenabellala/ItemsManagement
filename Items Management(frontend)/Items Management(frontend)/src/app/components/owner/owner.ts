import { Item } from '../item/item';

export class Owner {
    ownerId : number;
    ownerName : string;
    ownerLocation : string;    
    item : Item[];

    constructor(ownerId : number, ownerName : string,ownerLocation : string,item : Item[]){
        this.ownerId = ownerId;
        this.ownerName = ownerName;
        this.ownerLocation = ownerLocation;
        this.item = item


    }
}