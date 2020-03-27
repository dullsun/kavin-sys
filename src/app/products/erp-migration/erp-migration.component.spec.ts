import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpMigrationComponent } from './erp-migration.component';

describe('ErpMigrationComponent', () => {
  let component: ErpMigrationComponent;
  let fixture: ComponentFixture<ErpMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
