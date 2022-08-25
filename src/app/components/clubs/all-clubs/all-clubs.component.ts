import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubsService } from 'src/app/services/clubs.service';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-all-clubs',
  templateUrl: './all-clubs.component.html',
  styleUrls: ['./all-clubs.component.scss'],
})
export class AllClubsComponent implements OnInit {
  collection: string = "clubs"
  cols = [
    { field: 'id', header: 'Club ID' },
    { field: 'name', header: 'Club Name' },
    { field: 'nation', header: 'Nation' },
    { field: 'captain', header: 'Captain' },
    { field: 'year_founded', header: 'Year Founded' },
    { field: 'phone', header: 'Phone' },
    { field: 'email_contact', header: 'Email' },
    { field: 'vice_captain', header: 'Vice Captain' },
    { field: 'region', header: 'Region' }
  ];

  data: any = []

  constructor(public router: Router, public service: ClubsService, public auth: AuthService) {
    console.log()
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe(res => {
      this.data = res
      console.log("all", this.data)
    })
  }

  edit(id?: any) {
    this.router.navigateByUrl("/agencies/" + this.collection + "/edit/" + id)
  }

  delete(id?: any) {
    console.log("id", id)
    this.service.delete(id).then(res => {
      this.getData()
    })
  }

}
