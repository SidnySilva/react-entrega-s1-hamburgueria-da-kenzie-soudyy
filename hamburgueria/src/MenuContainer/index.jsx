import Product from "../Product";
import "./MenuContainer.css";
const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className="card_container">
      {products.map((item, index) => {
        return (
          <div className="card" key={index}>
            <figure className="card_figure">
              <img src={item.img}></img>
            </figure>

            <h1 className="card_name">{item.name}</h1>
            <span className="card_category">{item.category}</span>
            <span className="card_price">R${item.price}.00</span>
            <Product product={item} handleClick={handleClick} />
          </div>
        );
      })}
    </div>
  );
};

export default MenuContainer;
