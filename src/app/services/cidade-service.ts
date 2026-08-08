import { Injectable} from '@angular/core';
import { Cidade } from '../component/cadastro-da-cidade/cidade';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CidadeService {
    //array privado
    private cidades : Cidade[] = []
    //Contador de id que só cresce 
    private proximoId: number = 1

    adicionar(cidade: Cidade){
        cidade.idCidade = this.proximoId++
        this.cidades.push(cidade)
    }

    listar(){
        return this.cidades
    }

    buscarPorId(id: number){
        const cidade = this.cidades.find(elem => elem.idCidade == id)
         
        return of(cidade)
    }

    editar(cidade: Cidade){
        const posArray = this.cidades.findIndex(elem=> elem.idCidade == cidade.idCidade)
        
        if(posArray !== -1){
            this.cidades[posArray] = cidade
        }
    }

    excluir(id: number){
        this.cidades = this.cidades.filter(elem => elem.idCidade !== id)
    }    
}
