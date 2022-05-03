import { Component, OnInit } from '@angular/core';
import { DespatchNotesNewService } from '../services/despatch-notes-new.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit {
  public despatchNotesNewTable1: any = null;

  constructor(
    private despatchNotesNewService: DespatchNotesNewService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.despatchNotesNewService.getData('Table 1').subscribe(data => this.despatchNotesNewTable1 = data);
  }
}
