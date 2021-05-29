import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.scss']
})
export class AgencyDetailsComponent implements OnInit {
  pageTitle = "Agency"
  collection = "agencies"
  id: any = null

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
    }
  }

  getData() {

  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/edit/" +"id")
    // this.router.navigateByUrl("/" + this.collection + "/edit/" + id)
  }

  delete(id?: any) {

  }

}
