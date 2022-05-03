import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderHeadersNew } from './order-headers-new';

@Injectable({
  providedIn: 'root'
})
export class OrderHeadersNewService {
  public getData(tableName: string): Observable<any> {
    return of(OrderHeadersNew[tableName]);
  }
}
