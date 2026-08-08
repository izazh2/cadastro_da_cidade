import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CidadeService } from '../../services/cidade-service';
import { Cidade } from '../cadastro-da-cidade/cidade';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  constructor(private router: Router, private cidadeService : CidadeService){}

  listaCidades(){
    return this.cidadeService.listar()
  }

  editar(cidade:Cidade){
    this.router.navigate(['/cadastro', cidade.idCidade])
  }

  excluir(cidade:Cidade){
    if (confirm("Tem certeza que seja excluir? ")){
      this.cidadeService.excluir(Number(cidade.idCidade))
    }
  }

}
