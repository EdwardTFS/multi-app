import { Injectable } from '@angular/core';
import { AbstractService } from 'shared';

@Injectable({
  providedIn: 'root'
})
export class ClientAbstractService extends AbstractService {
  getData1() { return 'client service data'; }
  override getData2(){ return 'client service data 2'; }
}
