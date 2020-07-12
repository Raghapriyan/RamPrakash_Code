import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolation
  heading: string = 'This is my App Component.';
  togglePageNum: boolean = false;
  pageNo: number = 20;
  showItem: number = 2;
  productList: string[] = ['Clothes', 'Electronics', 'Vehicles', 'Airlines', 'Food'];
  xyz: string = "";

  childName: string = "Ramprakash";
  childData: string = "";

  changePageNumber(){
    if(this.togglePageNum == true){
      this.pageNo = 20;
      this.showItem = 1;
    }
    else {
      this.pageNo = 10;
      this.showItem = 2;
    }
    this.togglePageNum = !this.togglePageNum;  
  }

  addProduct(){
    console.log(this.xyz);
    this.productList.push(this.xyz);
  }

  receiveData(value){
    this.childData = value;
  }
}
