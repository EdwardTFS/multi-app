import { Component } from '@angular/core';
import { AbstractService } from '../services/abstract.service';

@Component({
  selector: 'lib-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {

constructor(private abstractService : AbstractService) {
}
 data1 = this.abstractService.getData1();
 data2 = this.abstractService.getData2();

}
