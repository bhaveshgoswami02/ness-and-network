import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoutingService } from 'src/app/services/scouting.service';

@Component({
  selector: 'app-view-scouting',
  templateUrl: './view-scouting.component.html',
  styleUrls: ['./view-scouting.component.scss']
})
export class ViewScoutingComponent implements OnInit {
  pageTitle = "scouting"
  collection = "Scout"
  id: any = null
  data:any = {}
  constructor(public service:ScoutingService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if(this.id) {
      this.getData()
    }
  }

  getData() {
    this.service.getSingle(this.id).subscribe(res=>{
      this.data = res
    })
  }

}
