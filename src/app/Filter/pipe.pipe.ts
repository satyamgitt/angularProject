import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {



  transform(value: any, SearchedInput: any): any {
    // console.log(value);                     // all the array data coming from api
    // console.log(SearchedInput);              // all searched data what we search in input box


    if (value) {
      return value.filter( function(search: any) {
        // console.log(search);
        return search.name.toLowerCase().indexOf(SearchedInput.toLowerCase()) > -1
      });
    }

  }

}
