import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BradcrumsComponent } from './bradcrums/bradcrums.component';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BradcrumsComponent],
  exports: [HeaderComponent, SidebarComponent, BradcrumsComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
