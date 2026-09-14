import type { ApiResponse, Product } from '../types/types';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        if (!API_URL) {
            throw new Error('VITE_API_URL não está definida no ambiente.');
        }

        const response = await fetch(API_URL, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        if (data && Array.isArray(data.products)) {
            return data.products;
        }

        return [];
    } catch (error) {
        console.error('Falha ao buscar produtos da API:', error);
        return [];
    }
};