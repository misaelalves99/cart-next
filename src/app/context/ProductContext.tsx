// app/context/ProductContext.tsx

"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Product } from "../types/product";
import { getProducts } from "../lib/api/products";

type ProductContextType = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  loading: boolean;
  error: string;
};

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Erro ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, loading, error }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct deve ser usado dentro de um ProductProvider");
  }
  return context;
};
