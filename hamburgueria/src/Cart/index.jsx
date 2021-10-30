import "./Cart.css";
import { useState } from "react";

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="Cart">
      <header className="title">Carrinho de compras</header>
      <div className="itens">sacola</div>
    </div>
  );
};

export default Cart;
