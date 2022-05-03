import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderHeadersCleanFinal } from './order-headers-clean-final';

@Injectable({
  providedIn: 'root'
})
export class OrderHeadersCleanFinalService {
  public getData(tableName: string): Observable<any> {
    return of(OrderHeadersCleanFinal[tableName]);
  }
}
