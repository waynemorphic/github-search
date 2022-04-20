import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countingDates'
})
export class CountingDatesPipe implements PipeTransform {

  transform(value: any) {
    let valueArray = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig,"$1 $2 $3").split(" ");
    let dateCreated = new Date(valueArray[0],valueArray[1]-1, valueArray[2]);
    let currentdate = new Date() ;
    let difference = currentdate.getTime() - dateCreated.getTime();
    difference/=(1000 * 60 * 60 * 24);
    return Math.trunc(difference);
  }

}
