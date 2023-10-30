import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import styles from "./cards.module.css";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { loadDogs, orderCards, filterCards } from "../../redux/actions/actions";
import { useEffect } from "react";
import axios from "axios";

const Cards = ({ allDogs, loadDogs, dogs }) => {
  const { selectMenu, selectC, divFondo } = styles;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);

  const maximo = Math.ceil(allDogs.length / porPagina);

  useEffect(() => {
    loadDogs();
  }, [loadDogs]);

let displayDogs = [];

if(dogs.length>0) {
  displayDogs = dogs;
} else {
  displayDogs = allDogs;
}

  const handleOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCards(order));
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
      </div>
      <div className={divFondo}>
        {displayDogs.slice((pagina-1)*porPagina, (pagina-1)*porPagina+porPagina).map(({ name, reference_image_id, temperament, weight }, index) => {

          return (
            <Card
              name={name}
              image={imagen}
              temperament={temperament}
              weight={weight.metric}
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
