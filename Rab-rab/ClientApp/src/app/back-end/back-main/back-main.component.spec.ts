import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackMainComponent } from './back-main.component';

describe('BackMainComponent', () => {
  let component: BackMainComponent;
  let fixture: ComponentFixture<BackMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
