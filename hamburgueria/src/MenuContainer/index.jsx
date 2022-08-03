import Product from "../Product";
import "./MenuContainer.css";
const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className='card_container'>
      {products.map((item, index) => {
        return (
          <div className='scroll' key={index}>
            <Product handleClick={handleClick} products={item} />
          </div>
        );
      })}
    </div>
  );
};

export default MenuContainer;
