import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBookListComponent } from './shared-book-list.component';

describe('SharedBookListComponent', () => {
  let component: SharedBookListComponent;
  let fixture: ComponentFixture<SharedBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
