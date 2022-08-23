import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  data: any
  constructor() { }

  printData(data: { type: string, value: any }) {
    console.log(data)

    this.data = data
    setTimeout(() => {
      window.print()
    }, 200);

  }
}
