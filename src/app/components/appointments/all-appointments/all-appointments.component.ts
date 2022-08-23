import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss'],
})
export class AllAppointmentsComponent implements OnInit {
  collection: string = "appointments"
  cols = [
    { field: 'id', header: 'Appointment ID' },
    { field: 'name', header: 'Appointment Name' },
    { field: 'date', header: 'Date' },
    { field: 'description', header: 'Description' },
  ];

  data: any = []

  constructor(public router: Router, public service: AppointmentsService, public auth: AuthService) {
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
    this.router.navigateByUrl("/" + this.collection + "/edit/" + id)
  }

  delete(id?: any) {
    console.log("id", id)
    this.service.delete(id).then(res => {
      this.getData()
    })
  }

}
