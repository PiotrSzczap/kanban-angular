import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    WelcomeComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
