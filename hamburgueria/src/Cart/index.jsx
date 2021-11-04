import "./Cart.css";
import CartProduct from "../CartProduct";

const Cart = ({ cart, cartTotal, setCurrentSale }) => {
  function removeItem(product) {
    setCurrentSale(cart.filter((item) => item !== product));
  }

  return (
    <>
      {cart.length === 0 ? (
        <div className="Cart">
          <header className="title">
            <p>Carrinho de compras</p>
          </header>

          <div className="empty">
            <h2>Sua sacola está vazia </h2>
            <p>adicione itens</p>
          </div>
        </div>
      ) : (
        <div className="cart_item">
          <header className="title">
            <p>Carrinho de compras</p>
          </header>
          <div className="itens">
            {cart.map((item) => (
              <div className="cart" key={item.id}>
                <CartProduct
                  products={item}
                  cart={cart}
                  setCurrentSale={setCurrentSale}
                />
              </div>
            ))}
            <div className="cart_pay">
              <div className="total">
                <span>Total</span>
                <p>R$ {cartTotal},00</p>
              </div>
              <button className="remove_all" onClick={() => setCurrentSale([])}>
                Remover Todos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
