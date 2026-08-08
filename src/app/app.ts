import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './component/menu/menu';
import { CadastroDaCidade } from './component/cadastro-da-cidade/cadastro-da-cidade'; 
import { Lista } from './component/lista/lista';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroDaCidade, Lista, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cadastro_da_cidade');
}
