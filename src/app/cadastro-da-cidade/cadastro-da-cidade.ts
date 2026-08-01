import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Cidade} from './cidade'

@Component({
  selector: 'app-cadastro-da-cidade',
  imports: [FormsModule],
  templateUrl: './cadastro-da-cidade.html',
  styleUrl: './cadastro-da-cidade.css',
})
export class CadastroDaCidade {
  nome_cidade : string = ''
  numero_eleitores: number = 0.0
  listaCidades : Cidade[] = []

  addCidade(){
    let cidade = new Cidade()
    cidade.idCidade = this.listaCidades.length + 1
    cidade.nomeCidade = this.nome_cidade
    cidade.numeroEleitores = this.numero_eleitores

    this.listaCidades.push(cidade)

    this.nome_cidade = ''
    this.numero_eleitores = 0.0
  }

  limpaTudo(){
    this.listaCidades = []
  }
}


