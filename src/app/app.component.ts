import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from'sweetalert2';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-router-demo';
  binary=0;
  letter='';
  showViceversa = true;

  convertidor:FormGroup;

  constructor() {
    this.convertidor = new FormGroup({
      binario: new FormControl('', [Validators.required]),
      letra: new FormControl('', [Validators.required])
    });
  }

  viceversa(){
    this.showViceversa =!this.showViceversa;
    console.log('Viceversa button clicked');
  }

  binario(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.value = textarea.value.replace(/[^01]/g, ''); 
  }

  letra(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.value = textarea.value.replace(/[^a-zA-Z]/g, ''); 
  }

  convertirTexto(letra: number): void{
    
  }

  convertirBinario(binario: string | null): void{

  }
}
