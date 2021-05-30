import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubAdminService } from 'src/app/services/sub-admin.service';

@Component({
  selector: 'app-all-sub-admin',
  templateUrl: './all-sub-admin.component.html',
  styleUrls: ['./all-sub-admin.component.scss']
})
export class AllSubAdminComponent implements OnInit {
  collection: string = "sub-admin"
  cols = [
    { field: 'id', header: 'Sub Admin ID' },
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'mobile', header: 'Mobile' },
  ];

  data:any = [ ]
  constructor(public router: Router,public service:SubAdminService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe(res=>{
      this.data = res
      console.log("all data",this.data)
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
