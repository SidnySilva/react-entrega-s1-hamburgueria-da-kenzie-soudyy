const Product = ({ handleClick, products }) => {
  return (
    <div className='card'>
      <figure className='card_figure'>
        <img src={products.img} alt={products.name}></img>
      </figure>

      <h1 className='card_name'>{products.name}</h1>
      <span className='card_category'>{products.category}</span>
      <span className='card_price'>R$ {products.price}.00</span>
      <button className='add' onClick={() => handleClick(products.id)}>
        adicionar
      </button>
    </div>
  );
};

export default Product;
