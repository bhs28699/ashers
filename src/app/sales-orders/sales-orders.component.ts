import { Component, OnInit } from '@angular/core';
import { OrderHeadersCleanFinalService } from '../services/order-headers-clean-final.service';

@Component({
  selector: 'app-sales-orders',
  templateUrl: './sales-orders.component.html',
  styleUrls: ['./sales-orders.component.scss']
})
export class SalesOrdersComponent implements OnInit {
  public orderHeadersCleanFinalTable1: any = null;

  constructor(
    private orderHeadersCleanFinalService: OrderHeadersCleanFinalService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.orderHeadersCleanFinalService.getData('Table 1').subscribe(data => this.orderHeadersCleanFinalTable1 = data);
  }
}
