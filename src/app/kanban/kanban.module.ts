import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueComponent } from './issue/issue.component';
import { StatusBlockComponent } from './status-block/status-block.component';



@NgModule({
  declarations: [
    DashboardComponent,
    IssueComponent,
    StatusBlockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KanbanModule { }
