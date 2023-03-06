import { Component } from '@angular/core';
import { Base1Service } from '../services/base1.service';
import { Base2Service } from '../services/base2.service';

@Component({
  selector: 'app-test-base1',
  templateUrl: './test-base1.component.html',
  styleUrls: ['./test-base1.component.scss']
})
export class TestBase1Component {

  constructor(private base1Service : Base1Service, private base2Service : Base2Service ) {
  }

  data11 = this.base1Service.getData1();
  data12 = this.base1Service.getData2();
  data21 = this.base2Service.getData1();
  data22 = this.base2Service.getData2();

}
