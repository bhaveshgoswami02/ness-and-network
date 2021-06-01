import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-single-players',
  templateUrl: './single-players.component.html',
  styleUrls: ['./single-players.component.scss']
})
export class SinglePlayersComponent implements OnInit {
  pageTitle: string = "Player"
  collection = "players";
  id: any = null;
  formData: FormGroup;
  imageSrc: any = "../../../../assets/images/user.png";
  imageFile: any;
  countries: any = []
  foot = ['left', 'right']
  position = [1, 2, 3]
  selectedCountry: any = { name: '', imgUrl: '' }

  constructor(public route: ActivatedRoute, private fb: FormBuilder, public service: PlayersService, public countryService: CountryService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'file': ['', [Validators.required]],
      'dob': ['', [Validators.required]],
      'nationality': [{}, [Validators.required]],
      'other_details': this.fb.group({
        'height': [0, [Validators.required]],
        'weight': [0, [Validators.required]],
        'preferred_foot': ['', [Validators.required]],
        'club': ['', [Validators.required]],
        'league': ['', [Validators.required]],
        'position': ['', [Validators.required]],
      }),
      'spr': this.fb.group({
        'defending': [0, [Validators.required]],
        'heading': [0, [Validators.required]],
        'passing': [0, [Validators.required]],
        'dribbling': [0, [Validators.required]],
        'vision': [0, [Validators.required]],
        'attacking': [0, [Validators.required]],
        'career_highlights': ['', [Validators.required]],
        'season_highlights': ['', [Validators.required]],
      }),
    })
    console.log(this.formData.value)
    console.log(this.validation)
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
    }
    this.getCountries()
  }

  get validation() { return this.formData?.controls; }

  getData() {
    this.service.getSingle(this.id).subscribe(res => {
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'file': [''],
        'dob': [data.dob, [Validators.required]],
        'nationality': [data.nationality, [Validators.required]],
        'other_details': this.fb.group({
          'height': [data.other_details.height, [Validators.required]],
          'weight': [data.other_details.weight, [Validators.required]],
          'preferred_foot': [data.other_details.preferred_foot, [Validators.required]],
          'club': [data.other_details.club, [Validators.required]],
          'league': [data.other_details.league, [Validators.required]],
          'position': [data.other_details.position, [Validators.required]],
        }),
        'spr': this.fb.group({
          'defending': [data.spr.defending, [Validators.required]],
          'heading': [data.spr.heading, [Validators.required]],
          'passing': [data.spr.passing, [Validators.required]],
          'dribbling': [data.spr.dribbling, [Validators.required]],
          'vision': [data.spr.vision, [Validators.required]],
          'attacking': [data.spr.attacking, [Validators.required]],
          'career_highlights': [data.spr.career_highlights, [Validators.required]],
          'season_highlights': [data.spr.season_highlights, [Validators.required]],
        })
      })
      this.imageSrc = data.imgUrl
      console.log("all", this.collection, this.formData)
    })
  }

  getCountries() {
    this.countryService.getAll().subscribe(res => {
      this.countries = res
      console.log("countries", this.countries)
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
    if (this.formData.value.file) {
      delete this.formData.value.file
    }
    if (this.id) {
      // console.log(this.formData.value,this.imageFile)
      this.service.update(this.id, this.formData.value, this.imageFile)
    }
    else {
      console.log(this.formData.value, this.imageFile)
      this.service.add(this.formData.value, this.imageFile)
    }
  }

}
