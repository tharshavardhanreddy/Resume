import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyformComponent } from './companyform.component';

describe('CompanyformComponent', () => {
  let component: CompanyformComponent;
  let fixture: ComponentFixture<CompanyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
