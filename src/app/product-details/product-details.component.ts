import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private prodService: ProductService) { }

  prodDetails = ["Car", "Bike", "Tempo"];

  ngOnInit() {
  }

  selectedProduct = [];

  addProd(eachProd){
    let prod = { name: eachProd, qty: 1 };
    let qty = 0;

    this.selectedProduct.forEach((each) => {
      if(eachProd == each.name){
        each.qty++;
        qty = each.qty;
      }
    });

    if(qty == 0){
      this.selectedProduct.push(prod);
    }

    this.prodService.sendProduct(this.selectedProduct);
  }
}
