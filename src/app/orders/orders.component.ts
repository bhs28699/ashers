import { Component, OnInit } from '@angular/core';
import { OrderHeadersNewService } from '../services/order-headers-new.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orderHeadersNewTable1: any = null;

  constructor(
    private orderHeadersNewService: OrderHeadersNewService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.orderHeadersNewService.getData('Table 1').subscribe(data => this.orderHeadersNewTable1 = data);
  }
}
