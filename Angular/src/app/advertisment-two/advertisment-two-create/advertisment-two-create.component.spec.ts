import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentTwoCreateComponent } from './advertisment-two-create.component';

describe('AdvertismentTwoCreateComponent', () => {
  let component: AdvertismentTwoCreateComponent;
  let fixture: ComponentFixture<AdvertismentTwoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertismentTwoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentTwoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
