import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFriendEditComponent } from './invite-friend-edit.component';

describe('InviteFriendEditComponent', () => {
  let component: InviteFriendEditComponent;
  let fixture: ComponentFixture<InviteFriendEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteFriendEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFriendEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
