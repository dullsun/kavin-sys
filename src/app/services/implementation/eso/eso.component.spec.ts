import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESOComponent } from './eso.component';

describe('ESOComponent', () => {
  let component: ESOComponent;
  let fixture: ComponentFixture<ESOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
