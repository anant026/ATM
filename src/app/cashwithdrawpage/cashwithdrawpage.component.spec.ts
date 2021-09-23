import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashwithdrawpageComponent } from './cashwithdrawpage.component';

describe('CashwithdrawpageComponent', () => {
  let component: CashwithdrawpageComponent;
  let fixture: ComponentFixture<CashwithdrawpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashwithdrawpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashwithdrawpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
