import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-single-agencies',
  templateUrl: './single-agencies.component.html',
  styleUrls: ['./single-agencies.component.scss']
})
export class SingleAgenciesComponent implements OnInit {
  pageTitle: string = "Agency"
  collection = "agencies";
  id: any = null;
  formData: FormGroup;
  countries: any = []
  imageSrc: any = "../../../../assets/images/user.png";
  documentSrc: any = "../../../../assets/images/document.png";
  imageFile: any;
  documentFiles: any = [];
  contracts?: FormArray;
  selectedCountry: any = { name: '', imgUrl: '' }
  subCollectionData: any = []
  multipleDocumentUrls: any = []
  multipleDocumentFiles: any = []
  singleData: any
  constructor(public route: ActivatedRoute, private fb: FormBuilder, public countryService: CountryService, public service: AgencyService) {
    this.formData = this.fb.group({
      'name': ['', [Validators.required]],
      'owner_name': ['', [Validators.required]],
      'nationality': ['', [Validators.required]],
      'mobile_no': ['', [Validators.required]],
      'full_address': ['', [Validators.required]],
      'file': ['', [Validators.required]],
      'contracts': this.fb.array([]),
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.getData()
      this.getSubCollectionData()
    }
    this.getCountries()
  }

  createContracts(): FormGroup {
    return this.fb.group({
      contract_date: '',
      contract_due_date: '',
      contract_terms: ''
    });
  }

  onAddContract(): void {
    this.contracts = this.formData.get('contracts') as FormArray;
    this.contracts.push(this.createContracts());
  }

  get validation() { return this.formData?.controls }
  

  getData() {
    this.service.getSingle(this.id).subscribe(res => {
      this.singleData = res
      this.formData = this.fb.group({
        'name': [this.singleData.name, [Validators.required]],
        'owner_name': [this.singleData.owner_name, [Validators.required]],
        'nationality': [this.singleData.nationality, [Validators.required]],
        'mobile_no': [this.singleData.mobile_no, [Validators.required]],
        'full_address': [this.singleData.full_address, [Validators.required]],
        'file': ['',],
        'files': ['',],
        'contracts': this.fb.array([]),
      })
      this.imageSrc = this.singleData.imgUrl
      if (this.singleData.contracts.length != 0) {
        this.editContracts()
      }
    })
  }

  getSubCollectionData() {
    this.service.getSubCollectionData(this.id).subscribe(res => {
      this.subCollectionData = res
    })
  }

  editContracts() {
    console.log("edit contracts", this.singleData.options)
    this.singleData?.contracts.forEach((contract: any) => {
      this.contracts = this.formData.get('contracts') as FormArray;
      this.contracts.push(this.fb.group({
        contract_date: contract.contract_date,
        contract_due_date: contract.contract_due_date,
        contract_terms: contract.contract_terms
      }))
    });
  }

  onSelectFile(event: any) {
    const reader = new FileReader();
    if (event.target.files) {
      const [file] = event.target.files;
      this.imageFile = event.target.files[0];
      console.log("imageFile", this.imageFile)
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(this.imageSrc)
      };
    }
  }

  getCountries() {
    this.countryService.getAll().subscribe(res => {
      this.countries = res
      console.log("countries", this.countries)
    })
  }

  onSubmit() {
    if (this.formData.value.file) {
      delete this.formData.value.file
    }
    if (this.id) {
      console.log(this.formData.value)
      this.service.update(this.id, this.formData.value, this.imageFile, this.multipleDocumentFiles)
    }
    else {
      console.log(this.formData.value)
      this.service.add(this.formData.value, this.imageFile, this.multipleDocumentFiles)
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

  onDeleteContract(index: any) {
    this.contracts?.removeAt(index);
  }

  get allContracts() {
    console.log(this.formData.get('contracts') as FormArray)
    return this.formData.get('contracts') as FormArray
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
    this.service.deleteMultipleDocument(this.id, documentId, documentPath)
    this.subCollectionData.splice(i, 1)
  }

}
