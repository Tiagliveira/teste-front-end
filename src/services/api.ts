import axios from 'axios';
import type { ApiResponse, Product } from '../types/types';

const BASE_URL = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

// Utiliza o proxy de CORS transparente para liberar o acesso no navegador da VPS
const API_URL = import.meta.env.VITE_API_URL || `https://corsproxy.io/?${encodeURIComponent(BASE_URL)}`;

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<ApiResponse>(API_URL);

        if (response.data && Array.isArray(response.data.products)) {
            return response.data.products;
        }

        return [];
    } catch (error) {
        console.error('Falha ao buscar produtos da API Econverse:', error);
        return [];
    }
};