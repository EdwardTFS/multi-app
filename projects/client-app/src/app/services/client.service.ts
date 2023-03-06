import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getData() {return "Client Data"; }
}
