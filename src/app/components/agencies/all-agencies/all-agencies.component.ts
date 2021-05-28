import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { field: 'contract_due', header: 'Contract Due' },
    { field: 'timestamp', header: 'Registration Date' },
  ];

  data = [
    { id: "123456789", name: "XYZ Agency", nationality: "India", contract_due: "30-Mar-2021", timestamp: "30-Mar-2021" },
    { id: "123456789", name: "ABC Agency", nationality: "India", contract_due: "30-Mar-2021", timestamp: "30-Mar-2021" },
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
