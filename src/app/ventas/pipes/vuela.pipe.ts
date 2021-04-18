import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vuela'//es el nombre como usaremos en otros lados el pipe
})
export class VuelaPipe implements PipeTransform{

    transform(value:boolean):string{
        return (value)? 'vuela' : 'no vuela';
    }
}