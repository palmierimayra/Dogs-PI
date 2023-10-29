import Card from "../Card/Card";
import styles from "./cards.module.css";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { loadDogs, orderCards, filterCards } from "../../redux/actions/actions";
import { useEffect } from "react";
import Pagination from "../Pagination/Pagination";

const Cards = ({ allDogs, loadDogs }) => {
  const { selectMenu, selectC, divFondo } = styles;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);

  const maximo = Math.ceil(allDogs.length / porPagina);

  useEffect(() => {
    loadDogs();
  }, [loadDogs]);

  const handleOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCards(order));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    const gender = event.target.value;
    dispatch(filterCards(gender));
    setAux(!aux);
  };

  return (
    <div>
      <div className={selectMenu}>
        <select className={selectC} onChange={handleOrder}>
          <option value="" selected disabled>Order</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className={selectC} onChange={handleFilter}>
          <option value="" selected disabled>Temperament</option>
          <option value="Gay">Gay</option>
        </select>
      </div>
      <div className={divFondo}>
        {allDogs.slice((pagina-1)*porPagina, (pagina-1)*porPagina+porPagina).map(({ name, image, temperament, weight }, index) => {
          return (
            <Card
              name={name}
              image={image}
              temperament={temperament}
              weight={weight}
            />
          );
        })}
      </div>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allDogs: state.allDogs,
});

export default connect(mapStateToProps, { loadDogs })(Cards);
