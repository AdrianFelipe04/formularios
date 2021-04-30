import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

      public usuarioe: Usuario= {
      nombre :"",
      apellido :"",
     correo : ""
    }

  paises=[{
    codigo: "CO",
    nombre: "Colombia",
  },{
    codigo: "ESP",
    nombre: "España",
  },]

    nombre= null;
    apellido= null;
    correo= null;
    pais="ESP";

  constructor() { }

  guardar( forma:NgForm ){

    console.log('Formulario disparado');
    console.log("ngForm",forma);
    console.log("Valor",forma.value);

    console.log("Usuario: ", this.nombre, this.apellido,this.correo);

    
    
    
    
  }

}
