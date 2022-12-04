import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteGameCreateComponent } from './favourite-game-create.component';

describe('FavouriteGameCreateComponent', () => {
  let component: FavouriteGameCreateComponent;
  let fixture: ComponentFixture<FavouriteGameCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteGameCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteGameCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
