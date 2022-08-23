import { PartnersService } from './../../../services/partners.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-single-partners',
  templateUrl: './single-partners.component.html',
  styleUrls: ['./single-partners.component.scss']
})
export class SinglePartnersComponent implements OnInit {

  collection = "partners";
  id: any = null;
  formData: FormGroup;
  imageSrc: any = "../../../../assets/images/upload.png";
  imageFile: any;
  selectedCountry: any = { name: '', imgUrl: '' }
  countries: any = []
  constructor(public route: ActivatedRoute, private fb: FormBuilder,public service:PartnersService,public auth:AuthService,public countryService:CountryService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'file': ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getCountries()
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
    }
  }

  getCountries() {
    this.countryService.getAll().subscribe(res => {
      this.countries = res
      console.log("countries", this.countries)
    })
  }


  get validation() { return this.formData?.controls; }

  getData() {
    this.service.getSingle(this.id).subscribe((res:any)=>{
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'country': [data.country, [Validators.required]],
        'city': [data.city, [Validators.required]],
        'address': [data.address, [Validators.required]],
        'file': ['', [Validators.required]],
      })
      this.imageSrc = data.imgUrl
    })
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
    if(this.formData.value.file) {
      delete this.formData.value.file
    }
    if (this.id) {
      // console.log(this.formData.value)
      this.service.update(this.id,this.formData.value,this.imageFile)
    }
    else {
      // console.log(this.formData.value)
      this.service.add(this.formData.value,this.imageFile)
    }
  }


}
