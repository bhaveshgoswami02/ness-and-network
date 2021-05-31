import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SubAdminService } from 'src/app/services/sub-admin.service';

@Component({
  selector: 'app-all-sub-admin',
  templateUrl: './all-sub-admin.component.html',
  styleUrls: ['./all-sub-admin.component.scss']
})
export class AllSubAdminComponent implements OnInit {
  collection: string = "sub-admin"
  cols = [
    { field: 'id', header: 'Sub Admin ID' },
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'mobile_no', header: 'Mobile' },
  ];
  id:any = null
  data:any = [ ]

  constructor(public router: Router,public service:SubAdminService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe(res=>{
      this.data = res
      console.log("all data",this.data)
    })
  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/edit/" + id)
  }

  view(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/detail/" + id)
  }

  delete(id?: any) {
    console.log("id", id)
    this.service.delete(id)
    // .then(res=>{
    //   this.getData()
    // })
  }

  blockSubAdmin() {
   this.service.blockSubAdmin(this.id,{isBlocked:true})
  }

  unBlockSubAdmin() {
   this.service.blockSubAdmin(this.id,{isBlocked:false})
  }

  confirmToBlockUser(id:string) {
    this.id = id
    this.messageService.clear();
    this.messageService.add({ key: 'blockSubAdmin', sticky: true, severity: 'warn', summary: 'Are you sure to block?', detail: 'Confirm to proceed!' });
  }

  onConfirmToBlock() {
    this.messageService.clear('blockSubAdmin');
    this.blockSubAdmin()
  }

  onRejectToBlock() {
    this.messageService.clear('blockSubAdmin');
  }

  confirmToUnBlockUser(id:string) {
    this.id = id
    this.messageService.clear();
    this.messageService.add({ key: 'unBlockSubAdmin', sticky: true, severity: 'warn', summary: 'Are you sure to Unblock?', detail: 'Confirm to proceed!' });
  }

  onConfirmToUnBlock() {
    this.messageService.clear('unBlockSubAdmin');
    this.unBlockSubAdmin()
  }

  onRejectToUnBlock() {
    this.messageService.clear('unBlockSubAdmin');
  }
}
