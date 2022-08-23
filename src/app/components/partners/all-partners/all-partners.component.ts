import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnersService } from 'src/app/services/partners.service';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-all-partners',
  templateUrl: './all-partners.component.html',
  styleUrls: ['./all-partners.component.scss'],
})
export class AllPartnersComponent implements OnInit {
  collection: string = "partners"
  cols = [
    { field: 'id', header: 'Partner ID' },
    { field: 'name', header: 'Partner Name' },
    { field: 'country', header: 'Date' },
    { field: 'city', header: 'City' },
    { field: 'address', header: 'Address' }
  ];

  data: any = []

  constructor(public router: Router, public service: PartnersService, public auth: AuthService) {
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
