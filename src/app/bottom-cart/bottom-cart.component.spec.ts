import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCartComponent } from './bottom-cart.component';

describe('BottomCartComponent', () => {
  let component: BottomCartComponent;
  let fixture: ComponentFixture<BottomCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
