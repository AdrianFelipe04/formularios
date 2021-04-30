import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent {

  forma:FormGroup;

  usuario:Usuario={

    nombrecompleto:{
      nombre:"",
      apellido:"",},
    correo:""
  }

  // usuario:any={

  //   nombrecompleto:{
  //     nombre:"",
  //     apellido:"",},
  //   correo:""
  // }

  usuarior:any={
    nombrer:"",
    apellidor:" ",
    correo:"",
    // pasatiempos:["Correr","Dormir","Comer"]
  }

  constructor() {

    console.log(this.usuarior);
    

    this.forma = new FormGroup({

        'nombrecompleto': new FormGroup({

          'nombre':new FormControl('', [Validators.required, Validators.minLength(5)]),
          'apellido':new FormControl('', [Validators.required,Validators.minLength(5)])

        }) ,

      'nombrer':new FormControl( '' , [Validators.required, Validators.minLength(5)]),
      'apellidor':new FormControl( '' , [Validators.required,Validators.minLength(5)]),
      'correo':new FormControl( '' , [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      //this.usuarior.correo antes del value si quieremos traer la informacion
       'pasatiempos': new FormArray([
         new FormControl('Correr', Validators.required)
       ])
    });

    // this.forma.setValue(this.usuarior);
                
  }

  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);

    
  this.forma.reset({ //para resetear los objetos al momento de guardar la data
    nombrer:"",
    apellidor:"",
    correo:""
  });
    
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('',[Validators.required]))
  }


}
