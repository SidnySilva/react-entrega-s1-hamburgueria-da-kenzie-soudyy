import "./CartProducts.css";

const CartProduct = ({ products, cart, setCurrentSale }) => {
  function removeItem(product) {
    setCurrentSale(cart.filter((item) => item !== product));
  }

  return (
    <div className='cartProduct'>
      <div className='cartBox'>
        <figure className='cartProduct_figure'>
          <img src={products.img} alt={products.name}></img>
        </figure>
        <div className='description'>
          <h1 className='cartProduct_name'>{products.name}</h1>
          <span className='cartProduct_category'>{products.category}</span>
        </div>
      </div>
      <div className='cartProduct_price'>
        <button className='remove' onClick={() => removeItem(products)}>
          remover
        </button>
        <p className='price'>R$ {products.price}.00</p>
      </div>
    </div>
  );
};

export default CartProduct;
