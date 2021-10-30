import Cart from "../Cart";

const Product = ({ handleClick, product }) => {
  return (
    <div>
      <button onClick={() => handleClick(product)}>adicionar</button>
    </div>
  );
};

export default Product;
