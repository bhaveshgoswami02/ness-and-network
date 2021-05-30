import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

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

  data:any = []

  constructor(public router: Router, public service: PlayersService) { }

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

  delete(id?: any) {
    console.log("id", id)
    this.service.delete(id).then(res=>{
      this.getData()
    })
  }

  view(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/detail/" + id)
  }

}
