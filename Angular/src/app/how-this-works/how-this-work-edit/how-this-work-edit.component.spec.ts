import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowThisWorkEditComponent } from './how-this-work-edit.component';

describe('HowThisWorkEditComponent', () => {
  let component: HowThisWorkEditComponent;
  let fixture: ComponentFixture<HowThisWorkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowThisWorkEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowThisWorkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
