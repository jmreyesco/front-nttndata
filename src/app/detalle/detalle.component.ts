import { Component } from '@angular/core';
import { Cliente } from '../users/cliente';
import { CLIENTES } from '../users/clientes.json';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Información básica';

  Mycliente: Cliente = CLIENTES[0];
  myName = this.Mycliente.name;
  myLastName = this.Mycliente.apellido;

  constructor() // private router: Router, // private clienteService: ClienteService,
  // private activatedRoute: ActivatedRoute
  {}

  ngOnInit() {
    // this.cargarCliente();
    console.log('MyName:', this.myName);
    console.log('MyName:', this.myLastName);
  }

  // cargarCliente(): void {
  //   this.activatedRoute.params.subscribe((params) => {
  //     let id = params['id'];
  //     if (id) {
  //       this.clienteService
  //         .getCliente(id)
  //         .subscribe((cliente) => (this.cliente = cliente));
  //     }
  //   });
  // }

  // create(): void {
  //   this.clienteService.create(this.cliente).subscribe((cliente) => {
  //     this.router.navigate(['/clientes']);
  //     swal(
  //       'Nuevo cliente',
  //       `Cliente ${cliente.nombre} creado con éxito!`,
  //       'success'
  //     );
  //   });
  // }

  // update(): void {
  //   this.clienteService.update(this.cliente).subscribe((cliente) => {
  //     this.router.navigate(['/clientes']);
  //     swal(
  //       'Cliente Actualizado',
  //       `Cliente ${cliente.nombre} actualizado con éxito!`,
  //       'success'
  //     );
  //   });
  // }
}
