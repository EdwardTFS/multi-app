import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base2Service {

  constructor() { }

  getData1() {return "base2 data1"; }
  getData2() {return "base2 data2"; }
}
