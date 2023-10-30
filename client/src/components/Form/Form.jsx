import styles from "./form.module.css";
import { useState } from "react";

export default function Form() {

  const { divPrinc, img, input, label, submit, inputDif } = styles;
  const [formData, setFormData] = useState({
    name: '',
    minHeight: '',
    maxHeight: '',
    minWeight: '',
    maxWeight: '',
    lifespan: '',
    temperaments: [],
    image:'',
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({...formData, [name]: value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === '' || formData.minWeight === '' || formData.maxWeight === '' || formData.minHeight === '' || formData.maxHeight === '' || formData.lifespan === '') {
        alert('Ningún campo puede estar vacío.');
        return;
      }

    if (formData.name.match(/\d/)) {
        alert('El nombre no puede contener números.');
        return;
      }
    
      const minWeight = parseInt(formData.minWeight);
      const maxWeight = parseInt(formData.maxWeight);
      const minHeight = parseInt(formData.minHeight);
      const maxHeight = parseInt(formData.maxHeight);
    
      if (minWeight >= maxWeight) {
        alert('El peso mínimo no puede ser mayor o igual que el peso máximo.');
        return;
      }

      if (minHeight >= maxHeight) {
        alert('La altura mínima no puede ser mayor o igual que la altura máxima.');
        return;
      }

      if (isNaN(minHeight) || isNaN(maxHeight) || isNaN(minWeight) || isNaN(maxWeight) || isNaN(parseFloat(formData.lifespan))) {
        alert('Los campos altura, peso y edad deben ser números válidos.');
        return;
      }


    const weight = `${formData.minWeight} - ${formData.maxWeight}`;
    const height = `${formData.minHeight} - ${formData.maxHeight}`;

    const dogData = {
        name: formData.name,
        height: height,
        weight: weight,
        life_span: formData.lifespan,
        temperament: formData.temperaments,
        image: formData.image,
      };
    
      try {
        const response = await fetch('http://localhost:3001/dogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dogData),
        });
    
        if (response.ok) {
          console.log('Raza de perro creada con éxito');
        } else {
          console.error('Error al crear la raza de perro');
        }
      } catch (error) {
        console.error('Error en la solicitud HTTP', error);
      }
  };

  return (
    <div className={divPrinc}>
      <form onSubmit={handleSubmit}>
        <img className={img} src="https://services.meteored.com/img/article/el-tamano-importa-como-el-tamano-de-tu-perro-influye-en-sus-patrones-de-envejecimiento-1698077723860_768.jpg" alt=""></img>
        <label className={label}>Nombre:</label>
        <input className={input} value={formData.name} onChange={handleInputChange} name="name" type="text" />
        <label className={label}>Peso (Minimo - Máximo):</label>
        <input className={inputDif} value={formData.minWeight} onChange={handleInputChange}  name="minWeight" type="text" />
        <input className={inputDif} value={formData.maxWeight} onChange={handleInputChange}  name="maxWeight" type="text" />
        <label className={label}>Altura (Minima - Máxima):</label>
        <input className={inputDif} value={formData.minHeight} onChange={handleInputChange} name="minHeight" type="text" />
        <input className={inputDif} value={formData.maxHeight} onChange={handleInputChange} name="maxHeight" type="text" />
        <label className={label}>Edad:</label>
        <input className={input} value={formData.lifespan} onChange={handleInputChange} name="lifespan" type="text" />
        <label className={label}>Temperamento:</label>
        <input className={input} value={formData.temperaments} onChange={handleInputChange} name="temperaments" type="text" />
        <label className={label}>Imagen:</label>
        <input className={input} value={formData.image} onChange={handleInputChange} name="image" type="text" />
        <p></p>
        <button className={submit} type="submit">Crear</button>
      </form>
    </div>
  );
}
