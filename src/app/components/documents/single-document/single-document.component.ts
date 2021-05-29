import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    {name:"pdf"},
    {name:"jpg"},
    {name:"jpeg"},
    {name:"png"},
  ]
  constructor(public route: ActivatedRoute, private fb: FormBuilder) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'files': ['', [Validators.required]],
      'type': ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
    }
  }

  get validation() { return this.formData?.controls; }

  getData() {

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
      // console.log(this.formData.value,this.imageFile)
    }
    else {
      // console.log(this.formData.value,this.imageFile)
    }
  }

}
