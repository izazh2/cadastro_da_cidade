import { Routes } from '@angular/router';
import { Menu } from './component/menu/menu';
import { CadastroDaCidade } from './component/cadastro-da-cidade/cadastro-da-cidade';
import { Lista } from './component/lista/lista';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },

    {
        path: 'menu',
        component: Menu
    },

    {
        path: 'cadastro',
        component: CadastroDaCidade
    },

    {
        path: 'cadastro/:id',
        component: CadastroDaCidade
    },

    {
        path: 'lista',
        component: Lista
    }
];
