import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggler') toggler:ElementRef | undefined

  constructor(public router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }

  toggle(){
    if(this.toggler){
      this.toggler.nativeElement.click()
    }
  }

  logout() {
    this.auth.logOut()
    this.toggle()
  }

  routing(route:string) {
    this.router.navigateByUrl("/"+route)
    this.toggle()
  }

}
