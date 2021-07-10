import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(elements: any[], filterString: string, filterProperty: string): any {
    if (elements.length == 0 || !filterString) {
      return elements;
    }
    const elementArray = [];
    for (let element of elements) {
      const value: string = element[filterProperty];
      if (value.includes(filterString)) {
        elementArray.push(element);
      }
    }
    return elementArray;
  }
}
