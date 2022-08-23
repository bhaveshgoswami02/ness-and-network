import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { SubAdminService } from 'src/app/services/sub-admin.service';

@Component({
  selector: 'app-single-sub-admin',
  templateUrl: './single-sub-admin.component.html',
  styleUrls: ['./single-sub-admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleSubAdminComponent implements OnInit {
  pageTitle: string = "Sub Admin"
  collection: string = "sub-admin";
  id: any = null;
  formData: FormGroup;
  menu: any = []
  dashboard = { view: false, edit: false, add: false, delete: false }
  country = { view: false, edit: false, add: false, delete: false }
  players = { view: false, edit: false, add: false, delete: false }
  scouting = { view: false, edit: false, add: false, delete: false }
  agencies = { view: false, edit: false, add: false, delete: false }
  sponsors = { view: false, edit: false, add: false, delete: false }
  documents = { view: false, edit: false, add: false, delete: false }
  setting = { view: false, edit: false, add: false, delete: false }
   appointments = { view: false, edit: false, add: false, delete: false }

  constructor(public route: ActivatedRoute, private fb: FormBuilder, public service: SubAdminService, public common: CommonService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'mobile_no': ['', [Validators.required]],
      'password': ['',[Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
      'dashboard': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
      'country': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
      'players': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
      'scouting': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
      'agencies': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
      'sponsors': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
      'documents': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
      'setting': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
      'appointments': this.fb.group({
        'view': [false],
        'edit': [false],
        'add': [false],
        'delete': [false],
      }),
    })
    console.log(this.formData)

    this.menu = [
      { icon: "pi pi-home", title: "Dashboard", route: "/dashboard" },
      { icon: "pi pi-globe", title: "Country", route: "/countries" },
      { icon: "pi pi-user", title: "Players", route: "/players" },
      { icon: "pi pi-users", title: "Scouting", route: "/scouting" },
      { icon: "pi pi-tablet", title: "Agency", route: "/agencies" },
      { icon: "pi pi-credit-card", title: "Sponsors", route: "/sponsors" },
      { icon: "pi pi-file", title: "Document", route: "/documents" },
      { icon: "pi pi-cog", title: "Setting", route: "/setting" },
      { icon: "pi pi-cog", title: "Appointments", route: "/appointments" }
    ]
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
    }
  }

  get validation() { return this.formData?.controls; }

  getData() {
    this.service.getSingle(this.id).subscribe(res => {
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'email': [data.email, [Validators.required]],
        'mobile_no': [data.mobile_no, [Validators.required]],
        'password': [data.password],
        'dashboard': this.fb.group({
          'view': [data.dashboard.view],
          'edit': [data.dashboard.edit],
          'add': [data.dashboard.add],
          'delete': [data.dashboard.delete],
        }),
        'country': this.fb.group({
          'view': [data.country.view],
          'edit': [data.country.edit],
          'add': [data.country.add],
          'delete': [data.country.delete],
        }),
        'players': this.fb.group({
          'view': [data.players.view],
          'edit': [data.players.edit],
          'add': [data.players.add],
          'delete': [data.players.delete],
        }),
        'scouting': this.fb.group({
          'view': [data.scouting.view],
          'edit': [data.scouting.edit],
          'add': [data.scouting.add],
          'delete': [data.scouting.delete],
        }),
        'agencies': this.fb.group({
          'view': [data.agencies.view],
          'edit': [data.agencies.edit],
          'add': [data.agencies.add],
          'delete': [data.agencies.delete],
        }),
        'sponsors': this.fb.group({
          'view': [data.sponsors.view],
          'edit': [data.sponsors.edit],
          'add': [data.sponsors.add],
          'delete': [data.sponsors.delete],
        }),
        'documents': this.fb.group({
          'view': [data.documents.view],
          'edit': [data.documents.edit],
          'add': [data.documents.add],
          'delete': [data.documents.delete],
        }),
        'setting': this.fb.group({
          'view': [data.setting.view],
          'edit': [data.setting.edit],
          'add': [data.setting.add],
          'delete': [data.setting.delete],
        }),
        'appointments': this.fb.group({
          'view': [data.appointments.view],
          'edit': [data.appointments.edit],
          'add': [data.appointments.add],
          'delete': [data.appointments.delete],
        }),
      })
    })
  }

  onSubmit() {
    // if (this.formData.value.file) {
    //   delete this.formData.value.file
    // }
    if (this.id) {
      delete this.formData.value.password
      console.log(this.formData.value)
      this.service.updateUser(this.id, this.formData.value)
    }
    else {
      console.log(this.formData.value)
      this.service.createUser(this.formData.value)
    }
  }

}
