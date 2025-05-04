import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavElComponent } from './nav-el.component';

describe('NavElComponent', () => {
  let component: NavElComponent;
  let fixture: ComponentFixture<NavElComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavElComponent]
    });
    fixture = TestBed.createComponent(NavElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
