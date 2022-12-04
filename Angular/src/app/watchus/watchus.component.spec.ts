import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchusComponent } from './watchus.component';

describe('WatchusComponent', () => {
  let component: WatchusComponent;
  let fixture: ComponentFixture<WatchusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
