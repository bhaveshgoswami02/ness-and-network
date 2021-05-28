import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit {
  collection: string = "countries"
  cols = [
    { field: 'id', header: 'Country ID' },
    { field: 'name', header: 'Country Name' },
    { field: 'imgUrl', header: 'Flag' },
    { field: 'timestamp', header: 'Registration Date' },
  ];

  data = [
    { id: "123456789", name: "Argentina", imgUrl: "ImgUrl", timestamp: "30-Mar-2021" },
    { id: "789456123", name: "Brazil", imgUrl: "ImgUrl", timestamp: "30-Mar-2021" },
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  edit(id?:any) {
    this.router.navigateByUrl("/" + this.collection + "/" + id)
  }

  delete() {
    
  }

}
