import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleProductDelete(id) {
    const updateCart = cart.filter((product) => product.id !== id);
    setCart(updateCart);
  }

  function handleProductAdd(newProduct) {
    const existingProduct = cart.find(
      (product) => newProduct.id === product.id
    );
    if (existingProduct) {
      const updateCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updateCart);
    } else {
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function getTotalPrice() {
    return cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  }

  function getCartCount() {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }

  function getProductFromCart(productId) {
    return cart.find((product) => product.id === productId);
  }

  const value = {
    cart,
    onProductAdd: handleProductAdd,
    onProductDelete: handleProductDelete,
    getCartCount,
    getProductFromCart,
    getTotalPrice,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
