import axios from 'axios';
import type { ApiResponse, Product } from '../types/types';

const BASE_URL = import.meta.env.VITE_API_URL || "https://devclub-institucional-dockerfile.5scnjc.easypanel.host/produtos.json";

// Garante que a URL sempre termine com /produtos.json se alguém esquecer na variável
const API_URL = BASE_URL.endsWith('/produtos.json')
    ? BASE_URL
    : `${BASE_URL.replace(/\/$/, '')}/produtos.json`;

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