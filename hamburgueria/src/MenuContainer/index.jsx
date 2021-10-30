import Product from "../Product";

const MenuContainer = ({ products, handleClick }) => {
  return (
    <div>
      {products.map((item, index) => {
        return (
          <div key={index}>
            Alguma coisa
            <Product product={item} handleClick={handleClick} />
          </div>
        );
      })}
    </div>
  );
};

export default MenuContainer;
