import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Products from "./Products.js";
import Cart from "./Cart.js";
import Home from "./Home.js";
import ProductDetails from "./ProductDetails.js";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailStorage from "./ProductDetailStorage.js";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  function handleProductDelete(id) {
    console.log("Deleting product" + id);
  }
  function handleProductAdd(newProduct) {
    console.log("Addding product" + newProduct.id);
  }
  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          }
        ></Route>
        <Route path="/products/:id" element={<ProductDetails />}>
          <Route
            path=""
            element={<ProductDetailInfo onProductAdd={handleProductAdd} />}
          ></Route>
          <Route path="nutrition" element={<ProductDetailNutrition />}></Route>
          <Route path="storage" element={<ProductDetailStorage />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
