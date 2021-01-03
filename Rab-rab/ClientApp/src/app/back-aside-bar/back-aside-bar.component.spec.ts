import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAsideBarComponent } from './back-aside-bar.component';

describe('BackAsideBarComponent', () => {
  let component: BackAsideBarComponent;
  let fixture: ComponentFixture<BackAsideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackAsideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackAsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
