import { NgModule } from '@angular/core';
import { OtherComponent } from './other/other.component';
import { InternalComponent } from './internal/internal.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';



@NgModule({
  declarations: [
    OtherComponent,
    InternalComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
  ],
  exports: [
    OtherComponent,
    Test1Component,
    Test2Component
  ]
})
export class SharedModule { }
