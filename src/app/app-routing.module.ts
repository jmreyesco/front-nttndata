import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/LoginReactiveComponent', pathMatch: 'full' }, // Correcto
  { path: 'LoginReactiveComponent', component: LoginReactiveComponent }, // Este es el path que será redirigido
  { path: 'DetalleComponent', component: DetalleComponent }, // Este es el path que será redirigido
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
