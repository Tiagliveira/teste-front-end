
export interface ApiResponse {
    sucess: boolean;
    products: Product[];
}
export interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export interface ProductCardProps {
    product: Product;
    onOpenModal?: (product: Product) => void;
    isAllActive?: boolean;
}

export interface ProductCarouselProps {
    products: Product[];
    onOpenModal?: (product: Product) => void;
    isAllActive?: boolean;
}

export interface CarrouselProductsProps {
    onOpenModal?: (product: Product) => void;
    hasTabs?: boolean;
    hasSimpleLink?: boolean;
    sectionId?: string;
}