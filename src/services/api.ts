import axios from 'axios';
import type { ApiResponse, Product } from '../types/types';

// URL com o caminho exato do arquivo .json
const DEFAULT_URL = "https://devclub-institucional-dockerfile.5scnjc.easypanel.host/produtos.json";

const API_URL = import.meta.env.VITE_API_URL || DEFAULT_URL;

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<ApiResponse>(API_URL);

        if (response.data && Array.isArray(response.data.products)) {
            return response.data.products;
        }

        return [];
    } catch (error) {
        console.error('Falha ao buscar produtos da API:', error);
        return [];
    }
};