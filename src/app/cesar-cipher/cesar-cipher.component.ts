import { Component } from '@angular/core';

@Component({
  selector: 'app-cesar-cipher',
  templateUrl: './cesar-cipher.component.html',
  styleUrls: ['./cesar-cipher.component.css']
})

export class CesarCipherComponent {
  mensaje: string = '';
  modulo: number = 3;
  operacion: string = 'cifrar';
  resultado: string = '';

  constructor() {}

  ejecutarOperacion() {
    if (this.operacion === 'cifrar') {
      this.resultado = this.cifrar(this.mensaje, this.modulo);
    } else if (this.operacion === 'descifrar') {
      this.resultado = this.descifrar(this.mensaje, this.modulo);
    }
  }

  cifrar(texto: string, modulo: number): string {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];
      let codigo = texto.charCodeAt(i);
      resultado += String.fromCharCode((codigo + modulo) % 256);
    }
    return resultado;
  }

  descifrar(textoCifrado: string, modulo: number): string {
    let resultado = '';
    for (let i = 0; i < textoCifrado.length; i++) {
      let caracter = textoCifrado[i];
      let codigo = textoCifrado.charCodeAt(i);
      resultado += String.fromCharCode((codigo - modulo + 256) % 256);
    }
    return resultado;
  }
}
