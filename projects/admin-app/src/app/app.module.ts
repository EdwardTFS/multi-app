import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AbstractService, SharedModule } from 'shared';
import { AdminAbstractService } from './services/admin-abstract.service';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{ provide: AbstractService, useExisting: AdminAbstractService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
