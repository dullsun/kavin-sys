import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ESOComponent} from './implementation/eso/eso.component';
import {HrCloudComponent} from './implementation/hr-cloud/hr-cloud.component';
import {MemoryDBHANAComponent} from './implementation/memory-dbhana/memory-dbhana.component';
import {ProjManagementComponent} from './implementation/proj-management/proj-management.component';
import { ManagingConsultingComponent } from './pro-services/managing-consulting/managing-consulting.component';
import { NetInfraConsultingComponent } from './pro-services/net-infra-consulting/net-infra-consulting.component';
import { SystemMigrationComponent } from './pro-services/system-migration/system-migration.component';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ManagingConsultingComponent, NetInfraConsultingComponent, SystemMigrationComponent, ESOComponent, HrCloudComponent, MemoryDBHANAComponent, ProjManagementComponent],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
