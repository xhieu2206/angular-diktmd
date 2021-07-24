import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute, // contains những information về route và
    // route's parameters. Bằng cách inject `ActivatedRoute`, chúng ta có thể
    // component sử dụng service
    private cartService: CartService
  ) { }

  ngOnInit() {
    // đầu tiên lấy ID của prodict từ route
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.product = products.find(product => product.id === id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('your product has been added to the card!');
  }
}
