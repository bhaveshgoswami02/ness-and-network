import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  data = [
    { id: "123456789", type: "Contract", name: "Contract with ABC Party", timestamp: "30-Mar-2021" },
    { id: "123456789", type: "Documents", name: "Document123", timestamp: "30-Mar-2021" },
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  edit(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/" + id)
  }

  view(id?: any) {
    this.router.navigateByUrl("/" + this.collection + "/detail/" + id)
  }

  delete() {

  }

}
