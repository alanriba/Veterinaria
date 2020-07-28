import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PageModule } from './pages/page.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, PageModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
