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

  ngOnChanges() {
    console.log(`CLOG "ngOnChanges": `, null);
  }

  ngOnInit(): void {
    console.log(`CLOG "ngOnInit": `, null);
  }

  ngDoCheck() {
    // được call ngay lập tức sau khi `ngOnChanges` mỗi khi có change detection run, và ngay sau `ngOnInit` ở lần chạy đầu tiên
    console.log(`CLOG "ngDoCheck": `, null);
  }

  ngAfterContentInit() {
    // call sau `ngDoCheck`
    console.log(`CLOG "ngAfterContentInit": `, null);
  }
}
