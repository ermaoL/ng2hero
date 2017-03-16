import { Pipe, PipeTransform } from '@angular/core';

import * as marked from 'marked';
import * as highlightjs from 'highlight.js';
@Pipe({
    name: 'marked'
})

export class MarkedPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        if(value) {
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                highlight: function (code) {
                    return highlightjs.highlightAuto(code).value;
                }
            });
          return marked(value);
        }
        return value;
    }
}
