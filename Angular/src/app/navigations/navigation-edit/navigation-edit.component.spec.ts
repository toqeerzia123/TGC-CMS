import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEditComponent } from './navigation-edit.component';

describe('NavigationEditComponent', () => {
  let component: NavigationEditComponent;
  let fixture: ComponentFixture<NavigationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
