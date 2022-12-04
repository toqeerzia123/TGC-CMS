import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentOneEditComponent } from './advertisment-one-edit.component';

describe('AdvertismentOneEditComponent', () => {
  let component: AdvertismentOneEditComponent;
  let fixture: ComponentFixture<AdvertismentOneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertismentOneEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentOneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
