import type { ApiResponse, Product } from '../types/types';

const DEFAULT_URL = "https://devclub-institucional-dockerfile.5scnjc.easypanel.host/produtos.json";

// Pega da ENV ou usa a URL padrão
const RAW_URL = import.meta.env.VITE_API_URL || DEFAULT_URL;

// Garante que a URL sempre termine com /produtos.json
const API_URL = RAW_URL.endsWith('/produtos.json')
    ? RAW_URL
    : `${RAW_URL.replace(/\/$/, '')}/produtos.json`;

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        console.log('Buscando produtos na URL:', API_URL);

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        console.log('Dados recebidos da API:', data);

        if (data && Array.isArray(data.products)) {
            return data.products;
        }

        return [];
    } catch (error) {
        console.error('Falha ao buscar produtos da API:', error);
        return [];
    }
};