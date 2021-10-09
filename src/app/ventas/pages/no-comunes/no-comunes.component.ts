import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
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

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá',
  };

  //JSON Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
