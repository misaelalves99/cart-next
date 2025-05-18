// app/layout.tsx

// 01-Estilização e Estrutura Global
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

// 03-Componentes Globais
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 07-Contextos Globais
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

// 07-Metadata
export const metadata: Metadata = {
  title: "Minha Loja",
  description: "Loja online com Next.js, TypeScript e Tailwind CSS",
};

// 07-Props e Router
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        {/* 09-Renderização Condicional - Providers em Nível Global */}
        <CartProvider>
          <ProductProvider>
            {/* 03-Layout Base */}
            <Navbar />

            <main className="flex-grow container mx-auto p-6">{children}</main>

            <Footer />
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
