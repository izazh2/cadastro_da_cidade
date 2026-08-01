import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroDaCidade } from './cadastro-da-cidade/cadastro-da-cidade';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroDaCidade],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cadastro_da_cidade');
}
