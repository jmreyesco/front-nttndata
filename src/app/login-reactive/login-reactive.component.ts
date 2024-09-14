import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tipo } from '../tipo.enum';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss'],
})
export class LoginReactiveComponent implements OnInit {
  form;
  check: boolean = false;

  // clientes: Cliente[];
  // public cliente: Cliente = new Cliente();

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11),
          Validators.pattern(/^[1-9]\d{6,10}$/),
        ],
      ],
      lastname: [''],
      email: [''],
      suscripcion: ['', Validators.required],
      message: [''],
    });
  }

  // Separador de miles
  numero: string = '';

  onInput(event: any): void {
    // Eliminar cualquier carácter no numérico para mantener solo números en el modelo
    this.numero = event.target.value.replace(/\D/g, '');
  }

  get firstname() {
    return this.form.get('firstname');
  }

  get suscripcion() {
    return this.form.get('suscripcion');
  }

  tipos: any[] = [];
  ngOnInit() {
    for (let item in Tipo) {
      if (isNaN(Number(item))) {
        this.tipos.push({ text: item, value: Tipo[item as keyof typeof Tipo] });
      }
    }
  }

  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('Tipo documento: ' + this.form.value.suscripcion);
      console.log('Numero: ' + this.form.value.firstname);
    } else {
      alert('FILL ALL FIELDS');
    }
  }

  goToAnotherPage() {
    this.router.navigate(['/DetalleComponent']);
  }
}
