import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { DetalleComponent } from './detalle/detalle.component';

//import ReactiveFormsModule here
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThousandSeparatorPipe } from './thousand-separator.pipe';

@NgModule({
  declarations: [AppComponent, LoginReactiveComponent, DetalleComponent, ThousandSeparatorPipe],

  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
