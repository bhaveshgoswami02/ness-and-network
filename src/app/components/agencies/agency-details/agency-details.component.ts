import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.scss']
})
export class AgencyDetailsComponent implements OnInit {
  pageTitle = "Agency"
  collection = "agencies"
  id: any = null
  data:any
  subCollectionData:any = []

  constructor(public router: Router, public route: ActivatedRoute,public service:AgencyService,public auth:AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
      this.getSubCollectionData()
    }
  }

  getData() {
    this.service.getSingle(this.id).subscribe(res=>{
      this.data = res
      console.log(this.pageTitle,this.data)
    })
  }

  getSubCollectionData() {
    this.service.getSubCollectionData(this.id).subscribe(res => {
      this.subCollectionData = res
    })
  }

  edit() {
    this.router.navigateByUrl("/" + this.collection + "/edit/" + this.id)
  }

  delete() {
    this.service.delete(this.id)
  }

}
