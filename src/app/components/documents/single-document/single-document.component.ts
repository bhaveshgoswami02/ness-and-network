import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-single-document',
  templateUrl: './single-document.component.html',
  styleUrls: ['./single-document.component.scss']
})
export class SingleDocumentComponent implements OnInit {
  pageTitle: string = "Document"
  collection: string = "documents";
  id: any = null;
  formData: FormGroup;
  documentSrc: any = "../../../../assets/images/document.png";
  documentFiles: any = [];
  documentTypes = [
    "pdf",
    "jpg",
    "jpeg",
    "png"
  ]
  subCollectionData: any = []
  multipleDocumentUrls: any = []
  multipleDocumentFiles: any = []

  constructor(public route: ActivatedRoute, private fb: FormBuilder, public documentService: DocumentService, public common: CommonService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'type': ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
      this.getSubCollectionData()
    }
  }

  get validation() { return this.formData?.controls; }

  getData() {
    this.documentService.getSingle(this.id).subscribe(res => {
      let data = res
      this.formData = this.fb.group({
        'name': [data.name, [Validators.required]],
        'type': [data.type, [Validators.required]],
      })
    })
  }

  getSubCollectionData() {
    this.documentService.getSubCollectionData(this.id).subscribe(res => {
      this.subCollectionData = res
    })
  }

  onSelectFile(event: any) {
    const reader = new FileReader();
    if (event.target.files) {
      const [file] = event.target.files;
      // this.imageFile = event.target.files[0];
      // console.log("imageFile", this.imageFile)
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.documentSrc = reader.result as string;
        console.log(this.documentSrc)
      };
    }
  }

  onSubmit() {
    if (this.formData.value.file) {
      delete this.formData.value.file
    }
    if (this.id) {
      console.log(this.formData.value)
      this.documentService.update(this.id, this.formData.value, '', this.multipleDocumentFiles)
    }
    else {
      console.log(this.formData.value)
      this.documentService.add(this.formData.value, '', this.multipleDocumentFiles)
    }
  }

  multipleDocumentPreview(event: any) {
    this.multipleDocumentUrls = [];
    this.multipleDocumentFiles = event.target.files;
    console.log("multipleDocumentFiles", this.multipleDocumentFiles)
    for (let file of this.multipleDocumentFiles) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.multipleDocumentUrls.push(e.target.result);
      }
      reader.readAsDataURL(file);
    }
  }

  deleteMultiplePreviewDocuments(i: any) {
    var newFileList = Array.from(this.multipleDocumentFiles);
    console.log("newFileList", newFileList)
    newFileList.splice(i, 1)
    console.log(this.multipleDocumentFiles)
    this.multipleDocumentFiles = newFileList
    console.log(this.multipleDocumentFiles)
    this.multipleDocumentFiles.splice(i, 1)
    this.multipleDocumentUrls.splice(i, 1)
  }

  deleteSubCollectionDocuments(documentId: string, documentPath: string, i: any) {
    this.documentService.deleteMultipleDocument(this.id, documentId, documentPath)
    this.subCollectionData.splice(i, 1)
  }

}
