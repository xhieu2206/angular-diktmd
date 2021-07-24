import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute // contains những information về route và route's parameters. Bằng cách inject `ActivatedRoute`, chúng ta có thể configurring component sử dụng service
  ) { }

  ngOnInit() {
    // đầu tiên lấy ID của prodict từ route
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    console.log(`CLOG ngOnInit "id": `, id);
    this.product = products.find(product => product.id === id);
  }

}
