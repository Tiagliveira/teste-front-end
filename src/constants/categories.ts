import { icons } from '../assets/icons';
import type { CategoryItem } from '../types/category';

export const CATEGORIES_LIST: CategoryItem[] = [
    { id: 'tech', label: 'Tecnologia', icon: icons.tech, href: '#tecnologia' },
    { id: 'supermarket', label: 'Supermercado', icon: icons.supermarket, href: '#supermercado' },
    { id: 'drinks', label: 'Bebidas', icon: icons.drinks, href: '#bebidas' },
    { id: 'tools', label: 'Ferramentas', icon: icons.tools, href: '#ferramentas' },
    { id: 'health', label: 'Saúde', icon: icons.health, href: '#saude' },
    { id: 'fitness', label: 'Esportes e Fitness', icon: icons.fitness, href: '#esportes-e-fitness' },
    { id: 'fashion', label: 'Moda', icon: icons.fashion, href: '#moda' },
];