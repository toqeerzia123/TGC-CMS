import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowThisWorkCreateComponent } from './how-this-work-create.component';

describe('HowThisWorkCreateComponent', () => {
  let component: HowThisWorkCreateComponent;
  let fixture: ComponentFixture<HowThisWorkCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowThisWorkCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowThisWorkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
