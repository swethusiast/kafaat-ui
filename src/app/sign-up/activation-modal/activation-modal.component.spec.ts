import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationModalComponent } from './activation-modal.component';

describe('ActivationModalComponent', () => {
  let component: ActivationModalComponent;
  let fixture: ComponentFixture<ActivationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
