import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DespatchNotesNew } from './despatch-notes-new';

@Injectable({
  providedIn: 'root'
})
export class DespatchNotesNewService {
  public getData(tableName: string): Observable<any> {
    return of(DespatchNotesNew[tableName]);
  }
}
