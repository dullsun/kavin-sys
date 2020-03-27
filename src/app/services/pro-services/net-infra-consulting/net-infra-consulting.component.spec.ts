import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetInfraConsultingComponent } from './net-infra-consulting.component';

describe('NetInfraConsultingComponent', () => {
  let component: NetInfraConsultingComponent;
  let fixture: ComponentFixture<NetInfraConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetInfraConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetInfraConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
