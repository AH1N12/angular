import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
  name : 'base64to'
})
export class Base64To implements PipeTransform {
  transform(val : any) : string {
    return window.btoa(val);
  }
}
