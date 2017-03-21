import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis'
})

export class EllipsisPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return String(value).substring(0, Number(args)) + '...';
    }
}
