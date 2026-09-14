import { icons } from "../assets/icons";
import type { SocialLink } from "../types/links";


export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
    { id: 'instagram', name: 'Instagram', href: 'https://instagram.com', icon: icons.instagram },
    { id: 'facebook', name: 'Facebook', href: 'https://facebook.com', icon: icons.facebook },
    { id: 'linkedin', name: 'LinkedIn', href: 'https://linkedin.com', icon: icons.linkedin },
];

export const FOOTER_ABOUT_LINKS = [
    { label: 'SOBRE NÓS', href: '#sobre-nos' },
    { label: 'POLÍTICA DE PRIVACIDADE', href: '#privacidade' },
    { label: 'TERMOS E CONDIÇÕES', href: '#termos' },
];

export const FOOTER_HELP_LINKS = [
    { label: 'FALE CONOSCO', href: '#contato' },
    { label: 'TROCAS E DEVOLUÇÕES', href: '#trocas' },
    { label: 'DÚVIDAS FREQUENTES', href: '#faq' },
];
