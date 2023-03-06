import { Injectable } from '@angular/core';
import { AbstractService } from 'shared';

@Injectable({
  providedIn: 'root'
})
export class AdminAbstractService extends AbstractService {
    getData1() { return 'admin service data'; }
}
