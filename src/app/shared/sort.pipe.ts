

import {PipeTransform, Pipe} from "@angular/core";
import {AllCast} from "../models/work";
@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform (works: AllCast[], sortBy: string): AllCast[] {
    if (sortBy) {
      works.sort((a: any, b: any) => {
        return getYear(b[sortBy]) - getYear(a[sortBy]);
      })
    } else {
      return works;
    }
    return works;
  }
}


function getYear(date: string): number {
  if (!date) {
    return;
  }
  return +date.slice(0, 4)
}
