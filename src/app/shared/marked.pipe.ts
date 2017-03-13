import { Pipe, PipeTransform } from '@angular/core';

import * as marked from 'marked';

@Pipe({
    name: 'marked'
})

export class MarkedPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        if(value) {
          return marked(value);
        }
        return value;
    }
}
