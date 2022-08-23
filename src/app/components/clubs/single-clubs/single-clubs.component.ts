import { ClubsService } from './../../../services/clubs.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-single-clubs',
  templateUrl: './single-clubs.component.html',
  styleUrls: ['./single-clubs.component.scss']
})
export class SingleClubsComponent implements OnInit {

  collection = "clubs";
  id: any = null;
  formData: FormGroup;
  imageSrc: any = "../../../../assets/images/upload.png";
  imageFile: any;
  selectedCountry: any = { name: '', imgUrl: '' }
  countries: any = []
  constructor(public route: ActivatedRoute, private fb: FormBuilder,public service:ClubsService,public auth:AuthService,public countryService: CountryService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'region': ['', [Validators.required]],
      'captain': ['', [Validators.required]],
      'vice_captain': ['', [Validators.required]],
      'year_founded': ['', [Validators.required]],
      'rate': ['', [Validators.required]],
      'nation': ['', [Validators.required]],
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

  get validation() { return this.formData?.controls; }

  getData() {
    this.service.getSingle(this.id).subscribe((res:any)=>{
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'region': [data.region, [Validators.required]],
        'captain': [data.captain, [Validators.required]],
        'vice_captain': [data.vice_captain, [Validators.required]],
        'year_founded': [data.year_founded, [Validators.required]],
        'rate': [data.rate, [Validators.required]],
        'nation': [data.nation, [Validators.required]],
        'file': [, [Validators.required]],
      })
      this.imageSrc = data.imgUrl
      console.log("all",this.formData)
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

  getCountries() {
    this.countryService.getAll().subscribe(res => {
      this.countries = res
      console.log("countries", this.countries)
    })
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
