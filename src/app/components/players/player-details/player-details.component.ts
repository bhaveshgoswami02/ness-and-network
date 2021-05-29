import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerDetailsComponent implements OnInit {
  pageTitle = "Player"
  collection = "players"
  id: any = null
  chartData: any[] = [{
    "value": 28,
    "name": "Defending"
  },
  {
    "value": 50,
    "name": "Heading"
  },
  {
    "value": 40,
    "name": "Passing"
  },
  {
    "value": 39,
    "name": "Dribbling"
  },
  {
    "value": 47,
    "name": "Vision"
  },
  {
    "value": 100,
    "name": "Attacking"
  }
  ];
  options: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '60%',
        data: this.chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
    }
  }

  getData() {

  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/edit/" +"id")
    // this.router.navigateByUrl("/" + this.collection + "/edit/" + id)
  }

  delete(id?: any) {

  }

}
