import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GelocationComponent } from './gelocation.component';

describe('GelocationComponent', () => {
  let component: GelocationComponent;
  let fixture: ComponentFixture<GelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
