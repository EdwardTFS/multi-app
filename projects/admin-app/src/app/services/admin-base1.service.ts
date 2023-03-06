import { Injectable } from '@angular/core';
import { Base1Service } from 'projects/base/services/base1.service';

@Injectable({
  providedIn: 'root'
})
export class AdminBase1Service extends Base1Service {
  override getData1() { return "adminbase1 data1";  }
}
