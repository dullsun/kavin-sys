import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjManagementComponent } from './proj-management.component';

describe('ProjManagementComponent', () => {
  let component: ProjManagementComponent;
  let fixture: ComponentFixture<ProjManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
