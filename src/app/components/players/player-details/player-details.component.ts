import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EChartsOption } from 'echarts';
import { PlayersService } from 'src/app/services/players.service';

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
  chartData: any[] = [];
  options: EChartsOption = {}
  data: any = {}

  constructor(public router: Router, public route: ActivatedRoute, public service: PlayersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
    }
  }

  getData() {
    this.service.getSingle(this.id).subscribe(res => {
      this.data = res
      this.chartData = [{
        "value": this.data.spr?.defending,
        "name": "Defending"
      },
      {
        "value": this.data.spr?.heading,
        "name": "Heading"
      },
      {
        "value": this.data.spr?.passing,
        "name": "Passing"
      },
      {
        "value": this.data.spr?.dribbling,
        "name": "Dribbling"
      },
      {
        "value": this.data.spr?.vision,
        "name": "Vision"
      },
      {
        "value": this.data.spr?.attacking,
        "name": "Attacking"
      }
      ];
      this.options = {
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
    })
  }

  edit() {
    this.router.navigateByUrl("/" + this.collection + "/edit/" + this.id)
  }

  delete() {
    this.service.delete(this.id)
    this.router.navigateByUrl("/" + this.collection)
  }

}
