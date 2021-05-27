import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private loader: NgxUiLoaderService, private messageService: MessageService) { }

  showToast(type: string, title: string, message: string) {
    if (type == 'success') {
      this.messageService.add({ severity: 'success', summary: title, detail: message });
    } else if (type == 'info') {
      this.messageService.add({ severity: 'info', summary: title, detail: message });
    } else if (type == 'warning') {
      this.messageService.add({ severity: 'warn', summary: title, detail: message });
    } else if (type == 'error') {
      this.messageService.add({ severity: 'error', summary: title, detail: message });
    }
  }

  showLoader() {
    this.loader.start();
  }

  stopLoader() {
    this.loader.stop()
  }

}
