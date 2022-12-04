import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkCreateComponent } from './social-link-create.component';

describe('SocialLinkCreateComponent', () => {
  let component: SocialLinkCreateComponent;
  let fixture: ComponentFixture<SocialLinkCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLinkCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
