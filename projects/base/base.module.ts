import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBase1Component } from './test-base1/test-base1.component';
import { TestBase2Component } from './test-base2/test-base2.component';



@NgModule({
  declarations: [
    TestBase1Component,
    TestBase2Component
  ],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
