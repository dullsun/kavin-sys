import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ESOComponent} from './eso/eso.component';
import {HrCloudComponent} from './hr-cloud/hr-cloud.component';
import {MemoryDBHANAComponent} from './memory-dbhana/memory-dbhana.component';
import {ProjManagementComponent} from './proj-management/proj-management.component';


@NgModule({
  declarations: [ESOComponent, HrCloudComponent, MemoryDBHANAComponent, ProjManagementComponent],
  imports: [
    CommonModule
  ]
})
export class ImplementationModule { }
