import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentTwoComponent } from './advertisment-two.component';

describe('AdvertismentTwoComponent', () => {
  let component: AdvertismentTwoComponent;
  let fixture: ComponentFixture<AdvertismentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertismentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
