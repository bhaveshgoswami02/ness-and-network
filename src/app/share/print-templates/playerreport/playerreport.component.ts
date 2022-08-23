import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-playerreport',
  templateUrl: './playerreport.component.html',
  styleUrls: ['./playerreport.component.scss']
})
export class PlayerreportComponent implements OnInit {
  @Input('data') data: any

  constructor() { }

  ngOnInit(): void {
    // this.restaurant = this.commonService.getRestaurant()
    console.log(">>>>>", this.data)

  }




}
