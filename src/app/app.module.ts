import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { IgxListModule, IgxAvatarModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxNavbarModule, IgxDatePickerModule, IgxSwitchModule, IgxGridModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    OrdersComponent,
    InvoicePDFComponent,
    PickListPDFComponent,
    OrderPDFComponent,
    ShipmentPDFComponent,
    TrackingInfoComponent,
    ShipmentsComponent,
    SalesOrdersComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule,
    FormsModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxNavbarModule,
    IgxDatePickerModule,
    IgxSwitchModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
