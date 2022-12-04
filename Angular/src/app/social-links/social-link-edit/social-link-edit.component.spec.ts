import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkEditComponent } from './social-link-edit.component';

describe('SocialLinkEditComponent', () => {
  let component: SocialLinkEditComponent;
  let fixture: ComponentFixture<SocialLinkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLinkEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
