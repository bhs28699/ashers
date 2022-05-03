import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDatePickerModule, IgxInputGroupModule, IgxGridModule } from 'igniteui-angular';
import { ShipmentsComponent } from './shipments.component';

describe('ShipmentsComponent', () => {
  let component: ShipmentsComponent;
  let fixture: ComponentFixture<ShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDatePickerModule, IgxInputGroupModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
