import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-scouting',
  templateUrl: './all-scouting.component.html',
  styleUrls: ['./all-scouting.component.scss']
})
export class AllScoutingComponent implements OnInit {
  collection: string = "scouting"
  cols = [
    { field: 'id', header: 'Scount ID' },
    { field: 'name', header: 'Scount Name' },
    { field: 'timestamp', header: 'Registration Date' },
  ];

  data = [
    { id: "123456789", name: "XYZ Agency", timestamp: "30-Mar-2021" },
    { id: "123456789", name: "ABC Agency", timestamp: "30-Mar-2021" },
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
