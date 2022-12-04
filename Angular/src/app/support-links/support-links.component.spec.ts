import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLinksComponent } from './support-links.component';

describe('SupportLinksComponent', () => {
  let component: SupportLinksComponent;
  let fixture: ComponentFixture<SupportLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
