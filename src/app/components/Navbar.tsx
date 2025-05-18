// 01 - Importações essenciais e hooks
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import CartButton from "./CartButton"; // ✅ Importação do botão do carrinho

const Navbar: React.FC = () => {
  // 06 - Pathname atual para renderização condicional
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      {/* 01 - Logo e navegação */}
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Meu E-Commerce
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.link} ${currentPath === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`${styles.link} ${currentPath === "/products" ? styles.active : ""}`}
          >
            Produtos
          </Link>

          {/* ✅ Carrinho como ícone com contador usando o CartButton */}
          <Link href="/cart" className={styles.link}>
            <CartButton />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
