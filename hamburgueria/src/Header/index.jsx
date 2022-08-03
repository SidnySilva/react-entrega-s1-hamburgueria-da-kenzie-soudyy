import "./header.css";
import { useState } from "react";

const Header = ({ showProducts }) => {
  const [itemFilter, setItemFilter] = useState("");
  return (
    <header className='header'>
      <div>
        <span className='burger'>Harcker's </span>
        <span className='kenzie'>burguer</span>
      </div>

      <div className='form'>
        <input
          className='input'
          placeholder='Digitar Pesquisa'
          type='text'
          onChange={(evt) => setItemFilter(evt.target.value)}
        />
        <button
          type='button'
          className='search'
          onClick={() => showProducts(itemFilter)}>
          Pesquisar
        </button>
      </div>
    </header>
  );
};

export default Header;
