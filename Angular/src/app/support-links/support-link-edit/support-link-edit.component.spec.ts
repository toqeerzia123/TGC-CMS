import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLinkEditComponent } from './support-link-edit.component';

describe('SupportLinkEditComponent', () => {
  let component: SupportLinkEditComponent;
  let fixture: ComponentFixture<SupportLinkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportLinkEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportLinkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
