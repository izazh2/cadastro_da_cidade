import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Cidade} from './cidade'
import { CidadeService } from '../../services/cidade-service';
import { ActivatedRoute } from '@angular/router';

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
  idCidadeEdit: number = 0
  edit = false

  constructor(private route : ActivatedRoute, private cidadeService : CidadeService){}

  carregaAtributos(cidade: Cidade){
    this.nome_cidade = String(cidade.nomeCidade)
    this.numero_eleitores = Number(cidade.numeroEleitores)
  }

  ngOninit(){
    const idCidade = this.route.snapshot.paramMap.get('id')

    if(idCidade){
      this.edit = true
      this.idCidadeEdit = Number(idCidade)

      this.cidadeService.buscarPorId(Number(idCidade)).subscribe(objCidade =>{
        if(objCidade){
          this.carregaAtributos({...objCidade})
        }
      })
    }
  }

  addCidade(){
    let cidade = new Cidade()
    cidade.idCidade = this.listaCidades.length + 1
    cidade.nomeCidade = this.nome_cidade
    cidade.numeroEleitores = this.numero_eleitores

    this.listaCidades.push(cidade)

    this.nome_cidade = ''
    this.numero_eleitores = 0.0

    if(this.edit){
      cidade.idCidade = this.idCidadeEdit
      this.cidadeService.editar(cidade)
      this.edit = false
    }else{
      cidade.id =this
    }
  }

  limpaTudo(){
    this.listaCidades = []
  }
}


