import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByDepartment'
})

export class GroupByDepartmentPipe implements PipeTransform {

  transform(value: any[], key: string): any {
    if (!value && !key && value.length) {
      return [];
    }

    const result = value.reduce((function (prev, current) {
      if (current[key]) {
        (prev[current[key]] = prev[current[key]] || []).push(current);
      }
      return prev;
    }), {});

    const keys: any[] = [];
    for (const prop in result) {
      if (result.hasOwnProperty(prop)) {
        keys.push({key: prop, result: result[prop]});
      }
    }
    return keys;
  }

}
