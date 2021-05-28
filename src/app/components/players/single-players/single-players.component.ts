import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  foot = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
  ]
  position = [
    {name: "left"},
    {name: "right"},
    {name: "top"},
    {name: "bottom"},
  ]
  constructor(public route: ActivatedRoute, private fb: FormBuilder) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'file': ['', [Validators.required]],
      'dob': ['', [Validators.required]],
      'nationality': ['', [Validators.required]],
      'height': ['', [Validators.required]],
      'weight': ['', [Validators.required]],
      'preferred_foot': ['', [Validators.required]],
      'position': ['', [Validators.required]],
      'passing': ['', [Validators.required]],
      'heading': ['', [Validators.required]],
      'defending': ['', [Validators.required]],
      'attacking': ['', [Validators.required]],
      'vision': ['', [Validators.required]],
      'dribbling': ['', [Validators.required]],
      'career_highlights': ['', [Validators.required]],
      'season_highlights': ['', [Validators.required]],
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
