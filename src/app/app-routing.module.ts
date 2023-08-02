import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./core/welcome/welcome.component";
import {NotfoundComponent} from "./core/notfound/notfound.component";
import {DashboardComponent} from "./kanban/dashboard/dashboard.component";
import {ConfigurationComponent} from "./configuration/configuration/configuration.component";

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
