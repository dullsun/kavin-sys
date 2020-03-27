import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingConsultingComponent } from './managing-consulting.component';

describe('ManagingConsultingComponent', () => {
  let component: ManagingConsultingComponent;
  let fixture: ComponentFixture<ManagingConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
