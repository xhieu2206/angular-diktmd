import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined; // cho biết rằng sẽ có property value được pass từ parent's comopnent.
  @Output() notify = new EventEmitter(); // cho phép component này emit event khi mà value của `notify` property thay đổi

  constructor() { }

  ngOnInit(): void {
  }

}
