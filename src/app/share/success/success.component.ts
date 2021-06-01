import { Component, OnInit } from '@angular/core';
import { SubAdminService } from 'src/app/services/sub-admin.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(public subAdmin:SubAdminService) { }

  ngOnInit(): void {
  }

}
