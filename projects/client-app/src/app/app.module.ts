import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { AbstractService } from 'shared';
import { ClientAbstractService } from './services/client-abstract.service';
import { BaseModule } from 'projects/base/base.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule
  ],
  providers: [{ provide: AbstractService, useClass: ClientAbstractService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
