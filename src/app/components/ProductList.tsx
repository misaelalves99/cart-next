// app/components/ProductList.tsx

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "../types/product";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import styles from "./ProductList.module.css";
import { CartItem } from "../types/cart";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = (product: Product) => {
    const cartItem: CartItem = {
      id: String(product.id),
      productId: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
      product: product,
      category: product.category,
    };
    addToCart(cartItem);
    router.push("/checkout");
  };

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onBuyNow={handleBuyNow}
        />
      ))}
    </div>
  );
};

export default ProductList;
