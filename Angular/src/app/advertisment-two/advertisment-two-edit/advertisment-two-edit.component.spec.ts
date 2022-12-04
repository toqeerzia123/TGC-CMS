import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentTwoEditComponent } from './advertisment-two-edit.component';

describe('AdvertismentTwoEditComponent', () => {
  let component: AdvertismentTwoEditComponent;
  let fixture: ComponentFixture<AdvertismentTwoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertismentTwoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentTwoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
