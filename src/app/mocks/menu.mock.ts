import { MenuItem } from "../models/menu-item.model";

export const MENUITEMS_MOCKS: MenuItem[] = [
    {
        name: 'Inicio', icon: 'bi bi-house', path: '', children: []
    },
    {
        name: 'Inicio 2', icon: 'bi bi-house', path: '/hola', children: []
    },
    {
        name: 'Trámites', icon: 'bi bi-house', path: '#', children: [
            { name: 'Nuevo Trámite', icon: 'article', path: '/tramites/nuevo', children:[] }
        ]
    },
    {
        name: 'Trámites 2', icon: 'bi bi-house', path: '#', children: [
            { name: 'Nuevo Trámite', icon: 'plus-circle', path: '/tramites', children:[] }
        ]
    }

];