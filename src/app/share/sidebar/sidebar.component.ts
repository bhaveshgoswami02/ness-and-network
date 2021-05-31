import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu: any = []

  constructor(public auth:AuthService) {
    this.menu = [
      { icon: "pi pi-home", title: "Dashboard", route: "/dashboard" },
      { icon: "pi pi-globe", title: "Country", route: "/countries" },
      { icon: "pi pi-user", title: "Players", route: "/players" },
      { icon: "pi pi-users", title: "Scouting", route: "/scouting" },
      { icon: "pi pi-tablet", title: "Agency", route: "/agencies" },
      { icon: "pi pi-credit-card", title: "Sponsors", route: "/sponsors" },
      { icon: "pi pi-file", title: "Document", route: "/documents" },
      { icon: "pi pi-cog", title: "Setting", route: "/setting" },
      { icon: "pi pi-users", title: "Sub Admin", route: "/sub-admin" },
    ]
  }

  ngOnInit(): void {
    console.log(this.auth.getSubAdminData())
  }

}
