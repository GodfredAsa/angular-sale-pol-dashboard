import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfElementsComponent } from './list-of-elements.component';

describe('ListOfElementsComponent', () => {
  let component: ListOfElementsComponent;
  let fixture: ComponentFixture<ListOfElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfElementsComponent]
    });
    fixture = TestBed.createComponent(ListOfElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
