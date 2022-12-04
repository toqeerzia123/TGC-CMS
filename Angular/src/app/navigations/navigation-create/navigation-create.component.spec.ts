import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCreateComponent } from './navigation-create.component';

describe('NavigationCreateComponent', () => {
  let component: NavigationCreateComponent;
  let fixture: ComponentFixture<NavigationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
