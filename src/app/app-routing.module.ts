import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoicePDFComponent } from './invoice-pdf/invoice-pdf.component';
import { PickListPDFComponent } from './pick-list-pdf/pick-list-pdf.component';
import { OrderPDFComponent } from './order-pdf/order-pdf.component';
import { ShipmentPDFComponent } from './shipment-pdf/shipment-pdf.component';
import { TrackingInfoComponent } from './tracking-info/tracking-info.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { SalesOrdersComponent } from './sales-orders/sales-orders.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'landing', component: LandingComponent, data: { text: 'Landing' } },
  { path: 'login', component: LoginComponent, data: { text: 'Login' } },
  { path: 'orders', component: OrdersComponent, data: { text: 'Orders' } },
  { path: 'invoice-pdf', component: InvoicePDFComponent, data: { text: 'Invoice PDF' } },
  { path: 'pick-list-pdf', component: PickListPDFComponent, data: { text: 'Pick List PDF' } },
  { path: 'order-pdf', component: OrderPDFComponent, data: { text: 'Order PDF' } },
  { path: 'shipment-pdf', component: ShipmentPDFComponent, data: { text: 'Shipment PDF' } },
  { path: 'tracking-info', component: TrackingInfoComponent, data: { text: 'Tracking Info' } },
  { path: 'shipments', component: ShipmentsComponent, data: { text: 'Shipments' } },
  { path: 'sales-orders', component: SalesOrdersComponent, data: { text: 'Sales Orders' } },
  { path: 'product', component: ProductComponent, data: { text: 'Product' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
