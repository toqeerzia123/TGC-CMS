import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLinkCreateComponent } from './support-link-create.component';

describe('SupportLinkCreateComponent', () => {
  let component: SupportLinkCreateComponent;
  let fixture: ComponentFixture<SupportLinkCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportLinkCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportLinkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
