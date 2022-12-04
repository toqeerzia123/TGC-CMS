import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchusEditComponent } from './watchus-edit.component';

describe('WatchusEditComponent', () => {
  let component: WatchusEditComponent;
  let fixture: ComponentFixture<WatchusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchusEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
