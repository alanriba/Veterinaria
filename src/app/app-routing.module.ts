import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PacienteComponent } from './pages/paciente/paciente.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'paciente', component: PacienteComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
