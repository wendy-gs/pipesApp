import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'//es el nombre como usaremos en otros lados el pipe
})
export class MayusculasPipe implements PipeTransform{

    transform(value:string, enMayusucula: boolean = true):string{
        return (enMayusucula)? value.toUpperCase() : value.toLowerCase();
    }
}