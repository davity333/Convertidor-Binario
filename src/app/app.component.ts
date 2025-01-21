import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router-demo';
  text: string = '';
  number: string = ''; 
  respuestaNumber: string = '';
  respuestaText: string = ''; 
  showText: boolean = true; 
  showBinary: boolean = false; 


  viceversa(): void {

    this.showText = !this.showText;
    this.showBinary = !this.showBinary;
    this.text = '';
    this.number = '';
    this.respuestaNumber = '';
    this.respuestaText = '';

    console.log('Modo cambiado:', this.showText ? 'Texto → Binario' : 'Binario → Texto');
  }
  binario(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.value = textarea.value.replace(/[^01]/g, '');
  }
  letra(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.value = textarea.value.replace(/[^a-zA-Z ]/g, '');
  }

  convertirTexto(): void {
    this.respuestaNumber = this.text
      .split('') 
      .map(caracter => caracter.charCodeAt(0).toString(2).padStart(8, '0')) 
      .join(' '); 
    console.log('Texto convertido a binario:', this.respuestaNumber);
  }

  convertirBinario(): void {
    this.respuestaText = this.number
      .split(' ') 
      .map(bin => String.fromCharCode(parseInt(bin, 2))) 
      .join(''); 
    console.log('Binario convertido a texto:', this.respuestaText);
  }
}