import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { AgencyService } from 'src/app/services/agency.service';
import { PlayersService } from 'src/app/services/players.service';
import { ScoutingService } from 'src/app/services/scouting.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar',
      },
    ],
  };

  cols = [
    { field: 'type', header: 'Type' },
    { field: 'company', header: 'Name of company' },
    { field: 'contact_date', header: 'Contract Date' },
    { field: 'contact_due_date', header: 'Contract Due Date' }
  ];

  data = [
    { type: "Agency", company: "XYZ Agency", contact_date: "01-Apr-2020", contact_due_date: "30-Mar-2021" },
    { type: "Sponsor", company: "NYK Sponsor", contact_date: "01-Apr-2020", contact_due_date: "30-Mar-2021" },
  ]

  allPlayers:any = []
  allScouts:any = []
  allAgencies:any = []

  constructor(public playerService:PlayersService,public scoutingService:ScoutingService,public agencyService:AgencyService) { }

  ngOnInit(): void {
    this.getPlayers()
    this.getAllScounts()
    this.getAllAgencies()
  }

  getPlayers() {
    this.playerService.getAll().subscribe(res=>{
      this.allPlayers = res
    })
  }

  getAllScounts() {
    this.scoutingService.getAll().subscribe(res=>{
      this.allScouts = res
    })
  }

  getAllAgencies() {
    this.agencyService.getAll().subscribe(res=>{
      this.allAgencies = res
    })
  }
}
