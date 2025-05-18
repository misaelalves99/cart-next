// app/utils/searchProducts.ts

import { Product } from '../types/product';

export const searchProductsByName = (products: Product[], searchTerm: string): Product[] => {
  if (!Array.isArray(products) || typeof searchTerm !== 'string') return [];

  return products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const searchProductsByDescription = (products: Product[], searchTerm: string): Product[] => {
  if (!Array.isArray(products) || typeof searchTerm !== 'string') return [];

  return products.filter((product) =>
    typeof product.description === 'string' &&
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
