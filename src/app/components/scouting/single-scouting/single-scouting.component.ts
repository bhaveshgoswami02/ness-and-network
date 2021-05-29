import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-scouting',
  templateUrl: './single-scouting.component.html',
  styleUrls: ['./single-scouting.component.scss']
})
export class SingleScoutingComponent implements OnInit {
  pageTitle: string = "Scout"
  collection = "scouting";
  id: any = null;
  formData: FormGroup;
  
  constructor(public route: ActivatedRoute, private fb: FormBuilder) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'report': ['', [Validators.required]],
      'prepare': ['', [Validators.required]],
      'system': ['', [Validators.required]],
      'key_player1': ['', [Validators.required]],
      'key_player2': ['', [Validators.required]],
      'note1': ['', [Validators.required]],
      'note2': ['', [Validators.required]],
      'attack': ['', [Validators.required]],
      'other_system': ['', [Validators.required]],
      'defend': ['', [Validators.required]],
      'att_corners': ['', [Validators.required]],
      'def_corners': ['', [Validators.required]],
      'restart': ['', [Validators.required]],
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
