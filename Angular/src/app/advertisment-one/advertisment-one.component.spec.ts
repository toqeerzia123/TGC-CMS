import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentOneComponent } from './advertisment-one.component';

describe('AdvertismentOneComponent', () => {
  let component: AdvertismentOneComponent;
  let fixture: ComponentFixture<AdvertismentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertismentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
