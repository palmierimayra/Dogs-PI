import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.module.css";

export default function Detail() {
  const { name } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`).then(
      ({ data }) => {
        if (data.length > 0) {
          const dDog = data[0];
          const dogData = {
            id: dDog.id,
            name: dDog.name,
            height: dDog.height.metric,
            weight: dDog.weight.metric,
            image: `https://cdn2.thedogapi.com/images/${dDog.reference_image_id}.jpg`,
            life_span: dDog.life_span,
            temperament: dDog.temperament,
          };
          setDog(dogData);
        }
      }
    );
    return setDog({});
  }, [name]);

  const { divPrinc, title, datos, img } = styles;

  return (
    <div className={divPrinc}>
      {dog.name ? (
        <>
          <div>
            <img className={img} src={dog.image} alt={dog.image} />
          </div>
          <div className={datos}>
            <h1 className={title}>{dog.id} - {dog.name.toUpperCase()}</h1>
            <h2>HEIGHT | {dog.height}</h2>
            <h2>WEIGHT | {dog.weight}</h2>
            <h2>YEARS | {dog.life_span}</h2>
            <h2>TEMPERAMENT | {dog.temperament}</h2>
          </div>
        </>
      ) : (
        <p>Cargando pagina...</p>
      )}
    </div>
  );
}
