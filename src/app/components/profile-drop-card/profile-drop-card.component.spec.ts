import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropCardComponent } from './profile-drop-card.component';

describe('ProfileDropCardComponent', () => {
  let component: ProfileDropCardComponent;
  let fixture: ComponentFixture<ProfileDropCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDropCardComponent]
    });
    fixture = TestBed.createComponent(ProfileDropCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
