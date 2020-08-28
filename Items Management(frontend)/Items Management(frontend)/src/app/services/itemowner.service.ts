import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Item } from '../components/item/item';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Owner } from '../components/owner/owner';

@Injectable({
  providedIn: 'root'
})
export class ItemownerService {

  private itemUrl='http://localhost:8080';

  constructor(private http : HttpClient) { }

  getItems() : Observable<Item[]> 
  {
    return this.http.get<Item[]>(`${this.itemUrl}/items`)
    .pipe(      
      catchError(this.handleError)
    );
  }

  getOwners() : Observable<Owner[]> 
  {
    return this.http.get<Owner[]>(`${this.itemUrl}/owners`)
    .pipe(      
      catchError(this.handleError)
    );
  }

  createItem(item : Item) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    item.itemId = null;
    return this.http.post(`${this.itemUrl}/additems`, item, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  createOwner(ownerId : number, ownerName : string,ownerLocation : string,itemId : number) {
    let jsonObj = {
      "ownerId" : ownerId,
      "ownerName" : ownerName,
      "ownerLocation" : ownerLocation,
      "item" : {
        "itemId" : itemId
      }

    }
    
    return this.http.post(`${this.itemUrl}/items/${itemId}/owner`,jsonObj)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteItem(itemId: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(`${this.itemUrl}/items/${itemId}`,{ headers })
    
  }

  deleteOwner(ownerId: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(`${this.itemUrl}/owner/${ownerId}`,{ headers })
    
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
