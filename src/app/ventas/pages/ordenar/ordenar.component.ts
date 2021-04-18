import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  enMayucuslas :boolean=true;

  ordenarPor:string = '';
  heroes:Heroe[] =[
    {
      nombre:'Superman',
      vuela: true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela: false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color:Color.verde
    },
    {
      nombre:'Daredevil',
      vuela: false,
      color:Color.rojo
    },
    {
      nombre:'Linterna verde',
      vuela: true,
      color:Color.verde
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(){
    this.enMayucuslas = !this.enMayucuslas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }

}
