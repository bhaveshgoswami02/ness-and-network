import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss'],
})
export class AllCountriesComponent implements OnInit {
  collection: string = "countries"
  cols = [
    { field: 'id', header: 'Country ID' },
    { field: 'name', header: 'Country Name' },
    { field: 'imgUrl', header: 'Flag' },
    { field: 'timestamp', header: 'Registration Date' },
  ];

  data: any = []

  constructor(public router: Router, public service: CountryService, public auth: AuthService) {
    console.log()
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll(this.collection).subscribe(res => {
      this.data = res
      console.log("all", this.collection, this.data)
    })
  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/edit/" + id)
  }

  delete(id?: any) {
    console.log("id", id)
    this.service.delete(this.collection, id).then(res => {
      this.getData()
    })
  }

}
