import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentOneCreateComponent } from './advertisment-one-create.component';

describe('AdvertismentOneCreateComponent', () => {
  let component: AdvertismentOneCreateComponent;
  let fixture: ComponentFixture<AdvertismentOneCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertismentOneCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentOneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
