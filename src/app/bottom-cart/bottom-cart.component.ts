import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-bottom-cart',
  templateUrl: './bottom-cart.component.html',
  styleUrls: ['./bottom-cart.component.css']
})
export class BottomCartComponent implements OnInit {

  constructor(private prodService: ProductService) { }

  selectedProduct = [];

  ngOnInit() {
    this.prodService.getProduct().subscribe((newProductList) => {
      this.selectedProduct = newProductList;
    })
  }

}
