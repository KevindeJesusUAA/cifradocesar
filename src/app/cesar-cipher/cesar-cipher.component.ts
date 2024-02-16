import { Component } from '@angular/core';

@Component({
  selector: 'app-cesar-cipher',
  templateUrl: './cesar-cipher.component.html',
  styleUrls: ['./cesar-cipher.component.css']
})

//1
export class CesarCipherComponent {
  mensaje: string = '';
  modulo: number = 3;
  operacion: string = 'cifrar';
  resultado: string = '';


  constructor() {}

  //2
  ejecutarOperacion() {
    if (this.operacion === 'cifrar') {
      this.resultado = this.cifrar(this.mensaje, this.modulo);
    } else if (this.operacion === 'descifrar') {
      this.resultado = this.descifrar(this.mensaje, this.modulo);
    }
  }

//3
  cifrar(texto: string, modulo: number): string {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];
      let codigo = texto.charCodeAt(i);
      resultado += String.fromCharCode((codigo + modulo) % 256);
    }
    return resultado;
  }
//4
  descifrar(textoCifrado: string, modulo: number): string {
    let resultado = '';
    for (let i = 0; i < textoCifrado.length; i++) {
      let caracter = textoCifrado[i];
      let codigo = textoCifrado.charCodeAt(i);
      resultado += String.fromCharCode((codigo - modulo + 256) % 256);
    }
    return resultado;
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.resultado)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
        });
}

}
