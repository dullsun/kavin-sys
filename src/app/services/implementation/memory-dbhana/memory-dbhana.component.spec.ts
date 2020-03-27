import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryDBHANAComponent } from './memory-dbhana.component';

describe('MemoryDBHANAComponent', () => {
  let component: MemoryDBHANAComponent;
  let fixture: ComponentFixture<MemoryDBHANAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryDBHANAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryDBHANAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
