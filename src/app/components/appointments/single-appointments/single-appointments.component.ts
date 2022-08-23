import { AppointmentsService } from './../../../services/appointments.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-single-appointments',
  templateUrl: './single-appointments.component.html',
  styleUrls: ['./single-appointments.component.scss']
})
export class SingleAppointmentsComponent implements OnInit {

  collection = "appointments";
  id: any = null;
  formData: FormGroup;
  imageSrc: any = "../../../../assets/images/upload.png";
  imageFile: any;
  constructor(public route: ActivatedRoute, private fb: FormBuilder,public service:AppointmentsService,public auth:AuthService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'description': ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
    }
  }

  get validation() { return this.formData?.controls; }

  getData() {
    this.service.getSingle(this.id).subscribe((res:any)=>{
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'date': [data.date, [Validators.required]],
        'description': [data.description, [Validators.required]]
      })
      console.log("all",this.formData)
    })
  }



  onSubmit() {
    if(this.formData.value.file) {
      delete this.formData.value.file
    }
    if (this.id) {
      // console.log(this.formData.value)
      this.service.update(this.id,this.formData.value)
    }
    else {
      // console.log(this.formData.value)
      this.service.add(this.formData.value)
    }
  }

}
