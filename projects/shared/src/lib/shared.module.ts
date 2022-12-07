import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { OtherComponent } from './other/other.component';



@NgModule({
  declarations: [
    SharedComponent,
    OtherComponent
  ],
  imports: [
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
