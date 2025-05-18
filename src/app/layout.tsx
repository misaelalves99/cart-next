// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

export const metadata: Metadata = {
  title: "Minha Loja",
  description: "Loja online com Next.js, TypeScript e Tailwind CSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <CartProvider>
          <ProductProvider>
            <Navbar />
            <main className="flex-grow container mx-auto p-6">
              {children}
            </main>
            <Footer />
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
