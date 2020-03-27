import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {EmployeeBenefitsComponent} from './products/employee-benefits/employee-benefits.component';
import {ErpMigrationComponent} from './products/erp-migration/erp-migration.component';
import {DataAnalyticsComponent} from './products/data-analytics/data-analytics.component';
import {ManagingConsultingComponent} from './services/pro-services/managing-consulting/managing-consulting.component';
import {NetInfraConsultingComponent} from './services/pro-services/net-infra-consulting/net-infra-consulting.component';
import {SystemMigrationComponent} from './services/pro-services/system-migration/system-migration.component';
import {ESOComponent} from './services/implementation/eso/eso.component';
import {HrCloudComponent} from './services/implementation/hr-cloud/hr-cloud.component';
import {MemoryDBHANAComponent} from './services/implementation/memory-dbhana/memory-dbhana.component';
import {ProjManagementComponent} from './services/implementation/proj-management/proj-management.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'products/employee-benefits', component: EmployeeBenefitsComponent},
  {path: 'products/erp-migration', component: ErpMigrationComponent},
  {path: 'products/data-analytics', component: DataAnalyticsComponent},
  {path: 'services/pro-services/managing-consulting', component: ManagingConsultingComponent},
  {path: 'services/pro-services/net-infra-consulting', component: NetInfraConsultingComponent},
  {path: 'services/pro-services/system-migration', component: SystemMigrationComponent},
  {path: 'services/implementation/eso', component: ESOComponent},
  {path: 'services/implementation/hr-cloud', component: HrCloudComponent},
  {path: 'services/implementation/memory-dbhana', component: MemoryDBHANAComponent},
  {path: 'services/implementation/proj-management', component: ProjManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
