import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCloudComponent } from './hr-cloud.component';

describe('HrCloudComponent', () => {
  let component: HrCloudComponent;
  let fixture: ComponentFixture<HrCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
