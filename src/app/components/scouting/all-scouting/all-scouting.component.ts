import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ScoutingService } from 'src/app/services/scouting.service';

@Component({
  selector: 'app-all-scouting',
  templateUrl: './all-scouting.component.html',
  styleUrls: ['./all-scouting.component.scss']
})
export class AllScoutingComponent implements OnInit {
  collection: string = "scouting"
  cols = [
    { field: 'id', header: 'Scount ID' },
    { field: 'name', header: 'Scount Name' },
    { field: 'timestamp', header: 'Registration Date' },
  ];

  data:any = []

  constructor(public router: Router,public auth:AuthService,public service:ScoutingService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe(res=>{
      this.data = res
    })
  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/edit/" + id)
  }

  delete(id?: any) {
    console.log("id", id)
    this.service.delete(id).then(res=>{
      this.getData()
    })
  }

  view(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/detail/" + id)
  }


}
