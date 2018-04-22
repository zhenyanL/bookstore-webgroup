import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListSellerComponent } from './book-list-seller.component';

describe('BookListSellerComponent', () => {
  let component: BookListSellerComponent;
  let fixture: ComponentFixture<BookListSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
