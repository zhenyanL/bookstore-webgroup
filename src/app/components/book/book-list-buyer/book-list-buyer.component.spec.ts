import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListBuyerComponent } from './book-list-buyer.component';

describe('BookListBuyerComponent', () => {
  let component: BookListBuyerComponent;
  let fixture: ComponentFixture<BookListBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
