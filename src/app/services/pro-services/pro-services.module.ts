import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagingConsultingComponent } from './managing-consulting/managing-consulting.component';
import { NetInfraConsultingComponent } from './net-infra-consulting/net-infra-consulting.component';
import { SystemMigrationComponent } from './system-migration/system-migration.component';



@NgModule({
  declarations: [ManagingConsultingComponent, NetInfraConsultingComponent, SystemMigrationComponent],
  imports: [
    CommonModule
  ]
})
export class ProServicesModule { }
