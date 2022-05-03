import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { PickListPDFComponent } from './pick-list-pdf.component';

describe('PickListPDFComponent', () => {
  let component: PickListPDFComponent;
  let fixture: ComponentFixture<PickListPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickListPDFComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickListPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
