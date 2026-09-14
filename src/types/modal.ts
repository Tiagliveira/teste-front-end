import type { Product } from './types';

export interface ModalProps {
    isOpen: boolean;
    product: Product | null;
    onClose: () => void;
}