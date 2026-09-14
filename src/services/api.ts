import axios from 'axios';
import type { ApiResponse, Product } from './../types/types';

const API_URL = import.meta.env.VITE_API_URL;
export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<ApiResponse>(API_URL);
        return response.data.products || [];
    } catch (error) {
        console.error('Falha ao buscar produtos da API com Axios:', error);
        return [];
    }
};