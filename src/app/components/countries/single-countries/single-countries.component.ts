import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-countries',
  templateUrl: './single-countries.component.html',
  styleUrls: ['./single-countries.component.scss']
})
export class SingleCountriesComponent implements OnInit {

  collection = "countries";
  id: any = null;
  formData: FormGroup;
  imageSrc: any = "../../../../assets/images/upload.png";
  imageFile: any;
  constructor(public route: ActivatedRoute, private fb: FormBuilder) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'file': ['', [Validators.required]],
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
      console.log("imageFile",this.imageFile)
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(this.imageSrc)
      };
    }
  }

  onSubmit() {
    if(this.formData.value.file) {
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
