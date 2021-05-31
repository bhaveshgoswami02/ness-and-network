import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ness-and-network';

  constructor(public common:CommonService,public auth:AuthService) {
    this.common.showToast("success","sdob","csdv")
  }

}
