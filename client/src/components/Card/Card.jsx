import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {

  const { h2, div, img, nameid } = styles;

  return (
    <div className={div}>
      <img className={img} src={props.image} alt="" />
      <Link to={`/detail/${props.name}`}>
        <h2 className={nameid}>{props.name}</h2>
      </Link>
      <h2 className={h2}>{props.temperament}</h2>
      <h2 className={h2}>{props.weight}</h2>
    </div>
  );
  }
