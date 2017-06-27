import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByDepartment'
})

export class GroupByDepartmentPipe implements PipeTransform {

  transform(value: any[], key: string): any {
    if (!value && !key && value.length) {
      return [];
    }

    let result =  value.reduce((function (prev, current) {
      if (current[key]) {
        (prev[current[key]] = prev[current[key]] || []).push(current);
      }
      return prev;
    }), {});

    let keys:any[] = [];
    for (let key in result) {
      keys.push({key: key, result: result[key]});
    }
    return keys;
  }

}
