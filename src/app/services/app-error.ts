import {ErrorHandler} from '@angular/core';

export class AppError implements ErrorHandler {
  constructor(public originalError?:any) { }

  handleError(error: any): void {
    alert("An unexpected error has occurred");
    console.log(error);
  }
}
