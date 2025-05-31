// CartContext.tsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartContext.Provider
      value={{
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
