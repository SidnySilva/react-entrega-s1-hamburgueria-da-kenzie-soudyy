import logo from './logo.svg';
import './reset.css'
import './App.css';
import {useState} from  'react'
import MenuContainer from './MenuContainer';
import Product from './Product';
import Header from './Header';
import Cart from './Cart';
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 5.00, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Fanta', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([])
    const [cartTotal, setCartTotal] = useState([])

    function showProducts (){ products.filter((item) =>{
        return setProducts(item.category)
      })}
    
    function handleClick (productId){
       const productFound = products.find((item)=>{
        return productId.id === item.id
    })
   setCurrentSale([...currentSale,productFound])
   console.log(currentSale)
  }
    
    const reducer = cartTotal.reduce((a,b) =>{
      return setCartTotal(a.price + b)
    },0)

      return (

    <div className="App">
      <Header showProducts={showProducts}/>
      <section className='itens_cointainer'><MenuContainer products={products} handleClick={handleClick}/>
       <Cart/></section>
        
    </div>
  );
}

export default App;
