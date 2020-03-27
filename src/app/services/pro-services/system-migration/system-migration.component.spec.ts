import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMigrationComponent } from './system-migration.component';

describe('SystemMigrationComponent', () => {
  let component: SystemMigrationComponent;
  let fixture: ComponentFixture<SystemMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
