import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreLower:string ='fernando';
  nombreUpper:string='FERNANDO';
  nombreCompleto:string ='ferNando herRerA';

  fecha:Date = new Date(); // el dia de hoy
  constructor() { }

  ngOnInit(): void {
  }

}
