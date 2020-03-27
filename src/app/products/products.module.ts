import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeBenefitsComponent } from './employee-benefits/employee-benefits.component';
import { ErpMigrationComponent } from './erp-migration/erp-migration.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';



@NgModule({
  declarations: [EmployeeBenefitsComponent, ErpMigrationComponent, DataAnalyticsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
