import { useState } from "react";
import ProductList from "./productlist";
import Cart from "./cart";

function App() {
  const [cart, setCart] = useState([])
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="App">
      <h1>Mini Sistema de Compras</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;