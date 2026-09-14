import type { ApiResponse, Product } from '../types/types';

const API_URL = "https://devclub-institucional-dockerfile.5scnjc.easypanel.host/produtos.json";

export const fetchProducts = async (): Promise<Product[]> => {
    try {
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