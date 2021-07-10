import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: string, length: number) {
        if (value.length > length) {
            return value.substr(0, length) + ' (...)';
        } else {
            return value.substr(0, length);
        }
    }

}