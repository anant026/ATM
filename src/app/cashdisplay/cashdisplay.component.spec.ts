import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashdisplayComponent } from './cashdisplay.component';

describe('CashdisplayComponent', () => {
  let component: CashdisplayComponent;
  let fixture: ComponentFixture<CashdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
