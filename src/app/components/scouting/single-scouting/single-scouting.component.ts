import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ScoutingService } from 'src/app/services/scouting.service';

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

  constructor(public route: ActivatedRoute, private fb: FormBuilder, public service: ScoutingService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'report': ['', [Validators.required]],
      'prepare': ['', [Validators.required]],
      'team1': this.fb.group({
        'system': [''],
        'key_player1': [''],
        'key_player2': [''],
        'note1': [''],
        'note2': [''],
        'attack': [''],
      }),
      'team2': this.fb.group({
        'other_system': [''],
        'key_player1': [''],
        'key_player2': [''],
        'note1': [''],
        'note2': [''],
        'defend': [''],
      }),
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
    this.service.getSingle(this.id).subscribe(res => {
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'report': [data.report, [Validators.required]],
        'prepare': [data.prepare, [Validators.required]],
        'team1': this.fb.group({
          'system': [data.team1.system],
          'key_player1': [data.team1.key_player1],
          'key_player2': [data.team1.key_player2],
          'note1': [data.team1.note1],
          'note2': [data.team1.note2],
          'attack': [data.team1.attack],
        }),
        'team2': this.fb.group({
          'other_system': [data.team2.other_system],
          'key_player1': [data.team2.key_player1],
          'key_player2': [data.team2.key_player2],
          'note1': [data.team2.note1],
          'note2': [data.team2.note2],
          'defend': [data.team2.defend],
        }),
        'att_corners': ['', [Validators.required]],
        'def_corners': ['', [Validators.required]],
        'restart': ['', [Validators.required]],
      })
    })
  }

  onSubmit() {
    if (this.formData.value.file) {
      delete this.formData.value.file
    }
    if (this.id) {
      console.log(this.formData.value)
      this.service.update(this.id, this.formData.value)
    }
    else {
      console.log(this.formData.value)
      this.service.add(this.formData.value)
    }
  }

}
