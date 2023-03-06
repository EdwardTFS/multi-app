import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {

  constructor() { }

  abstract getData1(): string;
  getData2(){ return 'shared service data'; }

}
