import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-sub-admin',
  templateUrl: './all-sub-admin.component.html',
  styleUrls: ['./all-sub-admin.component.scss']
})
export class AllSubAdminComponent implements OnInit {
  collection: string = "sub-admin"
  cols = [
    { field: 'id', header: 'Player ID' },
    { field: 'name', header: 'Name of Person' },
    { field: 'email', header: 'Email ID' },
    { field: 'mobile', header: 'Mobile' },
  ];

  data = [
    { id: "123456789", name: "Peter Thompson", email:"peter@gnmail.com", mobile: "1234567890" },
    { id: "123456789", name: "Robert Joerge", email:"robert@gnmail.com", mobile: "1234567890" },
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/" + id)
  }

  view(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/detail/" + id)
  }

  delete() {

  }

}
