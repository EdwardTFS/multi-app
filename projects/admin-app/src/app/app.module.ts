import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AbstractService, SharedModule } from 'shared';
import { AdminAbstractService } from './services/admin-abstract.service';
import { AdminComponent } from './admin/admin.component';
import { BaseModule } from 'projects/base/base.module';
import { Base1Service } from 'projects/base/services/base1.service';
import { AdminBase1Service } from './services/admin-base1.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BaseModule
  ],
  providers: [{ provide: AbstractService, useExisting: AdminAbstractService}, {provide: Base1Service, useClass: AdminBase1Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }
