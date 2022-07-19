import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFooterComponent } from './client-footer/client-footer.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { RouterModule } from '@angular/router';
import { ClientLoginSidebarComponent } from './client-login-sidebar/client-login-sidebar.component';
import { ClientLoginHeadnavComponent } from './client-login-headnav/client-login-headnav.component';



@NgModule({
  declarations: [
    ClientFooterComponent,
    ClientHeaderComponent,
    ClientLoginSidebarComponent,
    ClientLoginHeadnavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    ClientFooterComponent,
    ClientHeaderComponent,
    ClientLoginSidebarComponent,
    ClientLoginHeadnavComponent
  ]
})
export class SharedModule { }
