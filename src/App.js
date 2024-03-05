import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Products from "./Products.js";
import Cart from "./Cart.js";
import Home from "./Home.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
