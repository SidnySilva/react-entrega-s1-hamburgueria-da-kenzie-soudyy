import "./header.css";
import { useState } from "react";
const Header = ({ showProdutcs }) => {
  const [itemFilter, setItemFilter] = useState("");
  return (
    <header className="header">
      <div>
        <span className="burger">Burger </span>
        <span className="kenzie">kenzie</span>
      </div>

      <form className="form">
        <input
          className="input"
          placeholder="Digitar Pesquisa"
          type="text"
          value={itemFilter}
          onChange={(evt) => setItemFilter(evt.target.value)}
        />
        <button
          type="button"
          className="search"
          onclick={() => showProdutcs(itemFilter)}
        >
          Pesquisar
        </button>
      </form>
    </header>
  );
};

export default Header;
