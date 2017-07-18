import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByYear'
})
export class SortByYearPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) {
      return [];
    }

    let result: any[] = [];
    const sorterObject = Object.keys(value)
      .sort()
      .reduce((r, k) => ({
        ...r,
        [k]: value[k]
      }), {});

    for (let prop in sorterObject) {
      if (sorterObject.hasOwnProperty(prop)) {
        result.unshift(sorterObject[prop])
      }
    }

    if (!result.length) {
      return [];
    }

    return result;
  }

}
