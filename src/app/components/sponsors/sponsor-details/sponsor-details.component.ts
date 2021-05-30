import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-sponsor-details',
  templateUrl: './sponsor-details.component.html',
  styleUrls: ['./sponsor-details.component.scss']
})
export class SponsorDetailsComponent implements OnInit {
  pageTitle = "Sponsor"
  collection = "sponsors"
  id: any = null
  data:any
  subCollectionData:any = []
  constructor(public router: Router, public route: ActivatedRoute,public service:SponsorService) { }

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
