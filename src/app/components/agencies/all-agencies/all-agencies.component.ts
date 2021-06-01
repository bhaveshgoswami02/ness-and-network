import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-agencies',
  templateUrl: './all-agencies.component.html',
  styleUrls: ['./all-agencies.component.scss']
})
export class AllAgenciesComponent implements OnInit {
  collection: string = "agencies"
  cols = [
    { field: 'id', header: 'Agency ID' },
    { field: 'name', header: 'Agency Name' },
    { field: 'nationality', header: 'Country' },
    { field: 'timestamp', header: 'Registration Date' },
  ];

  data:any = []


  constructor(public router: Router,public service:AgencyService,public auth:AuthService) { }

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
    // .then(res=>{
    //   this.getData()
    // })
  }

}
