import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpageComponent } from './selectpage.component';

describe('SelectpageComponent', () => {
  let component: SelectpageComponent;
  let fixture: ComponentFixture<SelectpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
