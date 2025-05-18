// app/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductList from "./components/ProductList";
import { Product } from "./types/product";
import styles from "./HomePage.module.css";
import { getProducts } from "../app/lib/api/products"; // ✅ Caminho corrigido

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  // 06-Hooks + 08-Api - Busca produtos ao montar componente
  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts(); // ✅ Uso da função centralizada
      setProducts(data);
    };

    loadProducts();
  }, []);

  // 05-Formulários e Eventos - Handler de navegação
  const handleNavigate = () => {
    router.push("/products");
  };

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Bem-vindo ao Nosso E-commerce</h1>
        <p className={styles.description}>Explore nossos produtos incríveis!</p>
        <button className={styles.heroButton} onClick={handleNavigate}>
          Ver Produtos
        </button>
      </section>

      {/* 03-Arrays - Produtos em Destaque */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Produtos em Destaque</h2>
        <ProductList products={products.slice(0, 6)} />
      </section>
    </main>
  );
};

export default HomePage;
