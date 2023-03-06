import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base1Service {

  constructor() { }

  getData1() {return "base1 data1"; }
  getData2() {return "base1 data2"; }

}
