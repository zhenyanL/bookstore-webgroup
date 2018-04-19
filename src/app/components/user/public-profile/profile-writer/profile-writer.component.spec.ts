import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWriterComponent } from './profile-writer.component';

describe('ProfileWriterComponent', () => {
  let component: ProfileWriterComponent;
  let fixture: ComponentFixture<ProfileWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
