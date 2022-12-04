import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchusCreateComponent } from './watchus-create.component';

describe('WatchusCreateComponent', () => {
  let component: WatchusCreateComponent;
  let fixture: ComponentFixture<WatchusCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchusCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
