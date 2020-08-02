import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private selectedProduct = new Subject<any>();

  sendProduct(productList){
    this.selectedProduct.next(productList);
  }

  getProduct():Observable<any>{
    return this.selectedProduct.asObservable();
  }
}
