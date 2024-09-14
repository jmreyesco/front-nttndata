import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeparator',
})
export class ThousandSeparatorPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';

    // Convertir a número y formatearlo con separadores de miles
    let newValue = value.toString().replace(/\D/g, ''); // Quitar caracteres no numéricos
    return newValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Agregar puntos como separador de miles
  }
}
