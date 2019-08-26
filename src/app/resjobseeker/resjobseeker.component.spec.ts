import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResjobseekerComponent } from './resjobseeker.component';

describe('ResjobseekerComponent', () => {
  let component: ResjobseekerComponent;
  let fixture: ComponentFixture<ResjobseekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResjobseekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResjobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
