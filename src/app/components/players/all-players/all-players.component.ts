import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.scss']
})
export class AllPlayersComponent implements OnInit {
  collection: string = "players"
  cols = [
    { field: 'id', header: 'Player ID' },
    { field: 'name', header: 'Player Name' },
    { field: 'nationality', header: 'Nationality' },
    { field: 'dob', header: 'Birth Date' },
    { field: 'spr', header: 'SPR' },
    { field: 'timestamp', header: 'Registration Date' },
  ];

  data = [
    { id: "123456789", name: "Neymar", nationality: "Indian", dob: "23-Aug-1999", spr:"77", timestamp: "30-Mar-2021" },
    { id: "123456789", name: "Lionel Messi", nationality: "Brazil", dob: "23-Sep-1999", spr:"98", timestamp: "30-Mar-2021" },
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/" + id)
  }

  view(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/detail")
    // this.router.navigateByUrl("/" + this.collection + "/detail/" + id)
  }

  delete() {

  }

}
