import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.scss']
})
export class AllDocumentsComponent implements OnInit {
  collection: string = "documents"
  cols = [
    { field: 'id', header: 'Doc ID' },
    { field: 'type', header: 'Doc Type' },
    { field: 'name', header: 'Doc Name' },
    { field: 'timestamp', header: 'Document Date' },
  ];

  data:any = [ ]
  constructor(public router: Router,public service:DocumentService,public auth:AuthService) { }

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

}
