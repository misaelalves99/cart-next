// app/utils/searchProducts.ts

import { Product } from '../types/product';

// 02-Funções e Métodos - Função para pesquisar produtos por nome
export const searchProductsByName = (products: Product[], searchTerm: string): Product[] => {
  if (!Array.isArray(products) || typeof searchTerm !== 'string') return [];

  return products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// 02-Funções e Métodos - Função para pesquisar produtos por descrição
export const searchProductsByDescription = (products: Product[], searchTerm: string): Product[] => {
  if (!Array.isArray(products) || typeof searchTerm !== 'string') return [];

  return products.filter((product) =>
    product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
