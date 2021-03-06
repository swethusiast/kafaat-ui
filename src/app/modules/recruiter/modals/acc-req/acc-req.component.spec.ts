import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccReqComponent } from './acc-req.component';

describe('AccReqComponent', () => {
  let component: AccReqComponent;
  let fixture: ComponentFixture<AccReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
