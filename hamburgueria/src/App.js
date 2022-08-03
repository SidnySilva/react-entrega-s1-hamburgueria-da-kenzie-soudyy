import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import MenuContainer from "./MenuContainer";
import Header from "./Header";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "MilkShake",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function showProducts(text) {
    setFilteredProducts(
      products.filter((item) => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      }),
    );
  }

  function reducer() {
    const value = currentSale.reduce((inicialValue, currentValue) => {
      return inicialValue + currentValue.price;
    }, 0);
    setCartTotal(value);
  }

  function handleClick(productId) {
    const productFound = products.find((item) => productId === item.id);
    if (currentSale.filter((item) => item.id === productId).length === 0)
      setCurrentSale([...currentSale, productFound]);
  }

  useEffect(() => {
    reducer();
  }, [currentSale]);

  return (
    <div className='App'>
      <Header showProducts={showProducts} />{" "}
      <section className='itens_cointainer'>
        <MenuContainer
          products={filteredProducts.length === 0 ? products : filteredProducts}
          handleClick={handleClick}
        />{" "}
        <Cart
          cart={currentSale}
          cartTotal={cartTotal}
          setCurrentSale={setCurrentSale}
        />{" "}
      </section>{" "}
    </div>
  );
}

export default App;
