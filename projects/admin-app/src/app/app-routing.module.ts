import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent, Test1Component, Test2Component } from 'shared';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'shared', component: OtherComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
