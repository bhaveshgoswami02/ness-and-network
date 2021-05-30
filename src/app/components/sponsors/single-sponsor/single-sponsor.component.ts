import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-sponsor',
  templateUrl: './single-sponsor.component.html',
  styleUrls: ['./single-sponsor.component.scss']
})
export class SingleSponsorComponent implements OnInit {
  pageTitle: string = "Sponsor"
  collection: string = "sponsors";
  id: any = null;
  formData: FormGroup;
  countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];
  imageSrc: any = "../../../../assets/images/user.png";
  documentSrc: any = "../../../../assets/images/document.png";
  imageFile: any;
  documentFiles: any = [];

  constructor(public route: ActivatedRoute, private fb: FormBuilder) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'files': ['', [Validators.required]],
      'owner_name': ['', [Validators.required]],
      'contract_date': ['', [Validators.required]],
      'contract_due_date': ['', [Validators.required]],
      'prepare': ['', [Validators.required]],
      'nationality': ['', [Validators.required]],
      'system': ['', [Validators.required]],
      'key_player1': ['', [Validators.required]],
      'mobile_no': ['', [Validators.required]],
      'file': ['', [Validators.required]],
      'note2': ['', [Validators.required]],
      'attack': ['', [Validators.required]],
      'other_system': ['', [Validators.required]],
      'defend': ['', [Validators.required]],
      'att_corners': ['', [Validators.required]],
      'def_corners': ['', [Validators.required]],
      'full_address': ['', [Validators.required]],
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

  }

  onSelectFile(event: any) {
    const reader = new FileReader();
    if (event.target.files) {
      const [file] = event.target.files;
      this.imageFile = event.target.files[0];
      console.log("imageFile", this.imageFile)
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(this.imageSrc)
      };
    }
  }

  onSubmit() {
    if (this.formData.value.file) {
      delete this.formData.value.file
    }
    if (this.id) {
      // console.log(this.formData.value,this.imageFile)
    }
    else {
      // console.log(this.formData.value,this.imageFile)
    }
  }

}
