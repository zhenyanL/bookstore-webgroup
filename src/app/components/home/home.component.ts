import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: any[];
  private sub;

  constructor() { }

  ngOnInit() {
    // this.load();
  }

  // load = () => {
  //   this.sub = this.productService.getProducts('./assets/mock-data/products.json')
  //     .subscribe(res => {
  //       this.products = res;
  //     })
  // };
  // addToCart = (product) => {
  //   this.cartService.addToCart({product,quantity:1})
  // };
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
