import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedbyListComponent } from './followedby-list.component';

describe('FollowedbyListComponent', () => {
  let component: FollowedbyListComponent;
  let fixture: ComponentFixture<FollowedbyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowedbyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedbyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
