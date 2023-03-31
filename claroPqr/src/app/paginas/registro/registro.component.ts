import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/app/Models/RegistrarCliente';
import { RegistroService } from 'src/app/Service/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  clientesLogin!: FormGroup;
  idUsuario!: any;
  nombre!: any;
  documento!:any;
  constructor(private fb: FormBuilder, private registroService: RegistroService, private router: Router,
    )
  {
    this.clientesLogin = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      documento: ['', Validators.required],
      tipo:['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  guardarcliente() {
    const cliente: Registro = {
      Nombres: this.clientesLogin.get('nombre')?.value,
      Apellidos: this.clientesLogin.get('apellido')?.value,
      Usuario: this.clientesLogin.get('usuario')?.value,
      Documento: this.clientesLogin.get('documento')?.value,
      Tipo:this.clientesLogin.get('tipo')?.value
    };
    this.router.navigate(['/inicio']);
    this.registroService.guardarClientes(cliente).subscribe(data => {
      this.idUsuario = data;
      // sessionStorage.setItem('idusuario', this.idUsuario);
      this.router.navigate(['/inicio']);

    });
  }
}
