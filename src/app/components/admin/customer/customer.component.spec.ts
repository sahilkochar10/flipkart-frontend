import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: AdminCustomerComponent;
  let fixture: ComponentFixture<AdminCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
