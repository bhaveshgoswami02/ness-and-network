import { AppointmentsService } from './../../services/appointments.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EChartsOption } from 'echarts';
import { AgencyService } from 'src/app/services/agency.service';
import { AuthService } from 'src/app/services/auth.service';
import { PlayersService } from 'src/app/services/players.service';
import { ScoutingService } from 'src/app/services/scouting.service';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  playersChartOption: EChartsOption = {};

  scoutingChartOption: EChartsOption = {};

  agenciesChartOption: EChartsOption = {}

  cols = [
    { field: 'type', header: 'Type' },
    { field: 'name', header: 'Name of company' },
  ];

  allPlayers: any = []
  allAppointments: any = []
  allScouts: any = []
  allAgencies: any = []
  allSponsors: any = []
  agencies_and_sponsors: any = []

  constructor(public playerService: PlayersService, public appointmentsService:AppointmentsService, public scoutingService: ScoutingService, public agencyService: AgencyService, public auth: AuthService, public sponsorService: SponsorService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    // this.isUnder30DaysBirthday()
    this.getAppointments()
    this.getPlayers()
    this.getAllScounts()
    this.combineAgenciesAndSponsors()
    // this.getAllAgencies()
  }

  getPlayers() {
    this.playerService.getAll().subscribe(res => {
      console.log(res,'allplayers')
      this.allPlayers = res
      let category: any = []
      let data: any = []
      this.allPlayers.forEach((player: any, index: number) => {
        let timestamp = this.datepipe.transform(player.timestamp.toDate(), 'dd-MM-yyyy');
        category.push(timestamp)
        data.push(index + 1)
      });
      this.playersChartOption = {
        xAxis: {
          type: 'category',
          data: category,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: data,
            type: 'bar',
          },
        ],
      }
    })
  }

  getAllScounts() {
    this.scoutingService.getAll().subscribe(res => {
      this.allScouts = res
      let category: any = []
      let data: any = []
      this.allScouts.forEach((scout: any, index: number) => {
        let timestamp = this.datepipe.transform(scout.timestamp.toDate(), 'dd-MM-yyyy');
        category.push(timestamp)
        data.push(index + 1)
      });
      this.scoutingChartOption = {
        xAxis: {
          type: 'category',
          data: category,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: data,
            type: 'bar',
          },
        ],
      };
    })
  }

  getAppointments() {
    this.appointmentsService.getAll().subscribe(res => {
      console.log(res,'allapointments')
      this.allAppointments = res
    })
  }




  // getAllAgencies() {
  //   this.agencyService.getAll().subscribe(res=>{
  //     this.allAgencies = res
  //   })
  // }

  // getAllSponsors() {
  //   this.sponsorService.getAll().subscribe(res=>{
  //     this.allSponsors = res
  //   })
  // }

  combineAgenciesAndSponsors() {
    let promise1 = new Promise(resolve => {
      this.agencyService.getAll().subscribe(res => {
        this.allAgencies = res
        let category: any = []
        let data: any = []
        this.allAgencies.forEach((agency: any, index: number) => {
          let timestamp = this.datepipe.transform(agency.timestamp.toDate(), 'dd-MM-yyyy');
          category.push(timestamp)
          data.push(index + 1)
        });
        this.agenciesChartOption = {
          xAxis: {
            type: 'category',
            data: category,
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: data,
              type: 'bar',
            },
          ],
        };
        console.log("allAgencies", this.allAgencies)
        resolve(res)
      })
    })
    let promise2 = new Promise(resolve => {
      this.sponsorService.getAll().subscribe(res => {
        this.allSponsors = res
        resolve(res)
      })
    })
    Promise.all([promise1, promise2]).then(values => {
      this.agencies_and_sponsors = this.allAgencies.concat(this.allSponsors)
      console.log("agencies_and_sponsors", this.agencies_and_sponsors)
    });
  }



  isUnder30DaysBirthday(dob:any) {
    let today= new Date()
    let realdate=new Date(dob)
    realdate.setFullYear(today.getFullYear())
    let demodate=new Date(new Date().setDate(today.getDate() + 30));
    if((realdate >= today) && (realdate <= demodate)) {
      return true
    }
    else {
      return false
    }

  }


  isUnder30Days(dob:any) {
    let today= new Date()
    let realdate=new Date(dob)
    let demodate=new Date(new Date().setDate(today.getDate() + 30));
    if((realdate >= today) && (realdate <= demodate)) {
      return true
    }
    else {
      return false
    }

  }



}
