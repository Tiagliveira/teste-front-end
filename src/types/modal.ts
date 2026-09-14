import type { Product } from './product';

export interface ModalProps {
    isOpen: boolean;
    product: Product | null;
    onClose: () => void;
}