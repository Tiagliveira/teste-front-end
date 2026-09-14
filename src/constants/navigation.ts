import { icons } from '../assets/icons';
import type { NavLink } from '../types/links';

export const NAV_LINKS_HEADER: NavLink[] = [
    { id: 'all-categories', label: 'Todas Categorias', href: '#todas-categorias' },
    { id: 'supermarket', label: 'Supermercado', href: '#supermercado' },
    { id: 'books', label: 'Livros', href: '#livros' },
    { id: 'fashion', label: 'Moda', href: '#moda' },
    { id: 'launches', label: 'Lançamentos', href: '#lancamentos' },
    { id: 'day-offers', label: 'Ofertas do Dia', href: '#ofertas-do-dia' },
    { id: 'signature', label: 'Assinatura', href: '#assinatura', icon: icons.crown },
];