import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { StatusListItemComponent } from './status-list-item/status-list-item.component';



@NgModule({
  declarations: [
    ConfigurationComponent,
    StatusListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConfigurationModule { }
