import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Xabi';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural
  clientes: string[] = ['Pepe', 'Juan', 'Agustin'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': ' tenemos un clientes esperando',
    other: 'tenemos # clientes esperando',
  };
  cambiarPersona() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
  }
}
