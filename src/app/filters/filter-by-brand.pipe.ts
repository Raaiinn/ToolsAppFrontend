import { Pipe, PipeTransform } from '@angular/core';

/** This class represents a pipe that is used to transform the data displayed on the tools-component template
 * The pipe is dedicated to filter by brand the tools displayed on the template
 */


@Pipe({
  name: 'filterByBrand'
})
export class FilterByBrandPipe implements PipeTransform {
  /**
   * The method transform overries the existing one on PipeTransform and his behavior is focused on the filtering done by brand
   * @param value represents the data that will be transformed according to the behavior of transform
   * @param arg represents the arguments that will indicate the way to transform the data
   * @returns @param resultTools will return the data that meets the requirements indicated by the behavior of the method transform
   */
  transform(value: any, arg: any): any {
    if(arg=='') return value;
    const resultTools = [];
    for(const tool of value){
      if (tool.brand.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultTools.push(tool);
      };
    };
    return resultTools;
  }

}
