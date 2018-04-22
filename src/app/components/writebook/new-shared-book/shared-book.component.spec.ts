import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBookComponent } from './shared-book.component';

describe('SharedBookComponent', () => {
  let component: SharedBookComponent;
  let fixture: ComponentFixture<SharedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
