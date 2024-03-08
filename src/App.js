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
import {AppProvider} from "./AppContext.js";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}>
            <Route path="" element={<ProductDetailInfo />}></Route>
            <Route
              path="nutrition"
              element={<ProductDetailNutrition />}
            ></Route>
            <Route path="storage" element={<ProductDetailStorage />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
