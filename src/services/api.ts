import axios from 'axios';
import type { ApiResponse, Product } from '../types/types';

const API_URL =
    "/app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

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