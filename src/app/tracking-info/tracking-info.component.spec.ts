import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { TrackingInfoComponent } from './tracking-info.component';

describe('TrackingInfoComponent', () => {
  let component: TrackingInfoComponent;
  let fixture: ComponentFixture<TrackingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingInfoComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
