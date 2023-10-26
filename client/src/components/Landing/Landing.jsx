import styles from './landing.module.css';

export default function Landing() {

  const {h1, button, div} = styles;

  return (
    <div className={div}>
<h1 className={h1}>Bienvenid@</h1>
<button className={button}>Ingresar</button>
    </div>
      
  );
}
