import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFriendCreateComponent } from './invite-friend-create.component';

describe('InviteFriendCreateComponent', () => {
  let component: InviteFriendCreateComponent;
  let fixture: ComponentFixture<InviteFriendCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteFriendCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFriendCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
