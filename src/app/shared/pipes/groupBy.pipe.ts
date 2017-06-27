import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'groupBy'
})

export class GroupByPipe implements PipeTransform {
    transform(value: any[], key: string): any {
      if (!value && !key && value.length) {
        return [];
      }

      return value.reduce((function (prev, current) {
        if (current[key]) {
          (prev[current[key]] = prev[current[key]] || []).push(current);
        }
        return prev;
      }), {});
    }
}
