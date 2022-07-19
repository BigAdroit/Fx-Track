import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { ClientLoginComponent } from './client-login.component';
import { HomeComponent } from './pages/home/home.component';
import { JournalComponent } from './pages/journal/journal.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClientLoginComponent,
    HomeComponent,
    JournalComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ClientLoginRoutingModule,
    SharedModule
  ]
})
export class ClientLoginModule { }
