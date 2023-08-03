import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {KanbanModule} from "./kanban/kanban.module";
import {ConfigurationModule} from "./configuration/configuration.module";
import {SharedModule} from "./shared/shared/shared.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    KanbanModule,
    ConfigurationModule,
    SharedModule, CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
