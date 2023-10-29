import styles from "./searchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const { btn, input, divsch } = styles;

  return (
    <div className={divsch}>
      <input className={input} type="search" onChange={handleChange}/>
      <button className={btn} onClick={() => {onSearch(name);}}>Buscar</button>
    </div>
  );
};
