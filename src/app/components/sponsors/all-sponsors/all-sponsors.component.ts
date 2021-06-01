import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-all-sponsors',
  templateUrl: './all-sponsors.component.html',
  styleUrls: ['./all-sponsors.component.scss']
})
export class AllSponsorsComponent implements OnInit {
  collection: string = "sponsors"
  cols = [
    { field: 'id', header: 'Sponsor ID' },
    { field: 'name', header: 'Sponsor Name' },
    { field: 'nationality', header: 'Country' },
    { field: 'timestamp', header: 'Registration Date' },
  ];

  data:any = []


  constructor(public router: Router,public service:SponsorService,public auth:AuthService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe(res => {
      this.data = res
      console.log("all", this.collection, this.data)
    })
  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/edit/" + id)
  }

  view(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/detail/" + id)
  }

  delete(id?: any) {
    console.log("id", id)
    this.service.delete(id)
  }

}
