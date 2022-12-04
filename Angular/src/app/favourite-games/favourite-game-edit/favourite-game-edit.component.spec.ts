import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteGameEditComponent } from './favourite-game-edit.component';

describe('FavouriteGameEditComponent', () => {
  let component: FavouriteGameEditComponent;
  let fixture: ComponentFixture<FavouriteGameEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteGameEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteGameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
