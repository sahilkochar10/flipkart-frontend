import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomerComponent } from './customer.component';

describe('UserCustomerComponent', () => {
  let component: UserCustomerComponent;
  let fixture: ComponentFixture<UserCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
