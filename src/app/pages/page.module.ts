import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages.component';
import { PacienteComponent } from './paciente/paciente.component';


@NgModule({
  declarations: [DashboardComponent, PagesComponent, PacienteComponent],
  exports: [DashboardComponent, PagesComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule, SharedModule],
})
export class PageModule {}
