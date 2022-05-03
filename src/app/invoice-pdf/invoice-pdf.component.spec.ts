import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { InvoicePDFComponent } from './invoice-pdf.component';

describe('InvoicePDFComponent', () => {
  let component: InvoicePDFComponent;
  let fixture: ComponentFixture<InvoicePDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePDFComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
