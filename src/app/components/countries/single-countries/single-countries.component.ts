import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

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
  constructor(public route: ActivatedRoute, private fb: FormBuilder,public service:CountryService) {
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
    this.service.getSingle(this.collection,this.id).subscribe((res:any)=>{
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'file': [''],
      })
      this.imageSrc = data.imgUrl
      console.log("all",this.collection,this.formData)
    })
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
      this.service.update(this.collection,this.id,this.formData.value,this.imageFile)
    }
    else {
      // console.log(this.formData.value,this.imageFile)
      this.service.add(this.collection,this.formData.value,this.imageFile)
    }
  }

}
