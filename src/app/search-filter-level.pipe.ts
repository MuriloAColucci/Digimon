import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterLevel'
})
@Injectable()
export class SearchFilterPipeLevel implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.level.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
