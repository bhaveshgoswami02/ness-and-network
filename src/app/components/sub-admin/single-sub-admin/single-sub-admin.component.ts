import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { SubAdminService } from 'src/app/services/sub-admin.service';

@Component({
  selector: 'app-single-sub-admin',
  templateUrl: './single-sub-admin.component.html',
  styleUrls: ['./single-sub-admin.component.scss']
})
export class SingleSubAdminComponent implements OnInit {
  pageTitle: string = "Sub Admin"
  collection: string = "sub-admin";
  id: any = null;
  formData: FormGroup;
  menu: any = []

  constructor(public route: ActivatedRoute, private fb: FormBuilder, public documentService: SubAdminService, public common: CommonService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'mobile_no': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    })
    this.menu = [
      { icon: "pi pi-home", title: "Dashboard", route: "/dashboard" },
      { icon: "pi pi-globe", title: "Country", route: "/countries" },
      { icon: "pi pi-user", title: "Players", route: "/players" },
      { icon: "pi pi-users", title: "Scouting", route: "/scouting" },
      { icon: "pi pi-tablet", title: "Agency", route: "/agencies" },
      { icon: "pi pi-credit-card", title: "Sponsors", route: "/sponsors" },
      { icon: "pi pi-file", title: "Document", route: "/documents" },
      { icon: "pi pi-cog", title: "Setting", route: "/setting" },
      { icon: "pi pi-users", title: "Sub Admin", route: "/sub-admin" },
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
    this.documentService.getSingle(this.id).subscribe(res => {
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'email': [data.email, [Validators.required]],
        'mobile_no': [data.mobile_no, [Validators.required]],
        'password': [data.password, [Validators.required]],
      })
    })
  }

  onSubmit() {
    if (this.formData.value.file) {
      delete this.formData.value.file
    }
    if (this.id) {
      console.log(this.formData.value)
      this.documentService.update(this.id, this.formData.value)
    }
    else {
      console.log(this.formData.value)
      this.documentService.add(this.formData.value)
    }
  }

}
