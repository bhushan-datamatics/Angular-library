import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOptnComponent } from './nav-optn.component';

describe('NavOptnComponent', () => {
  let component: NavOptnComponent;
  let fixture: ComponentFixture<NavOptnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOptnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOptnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
