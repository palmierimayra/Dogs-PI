import "./App.css";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function App() {

  const [dogs, setDogs] = useState([]);

  const onSearch = async (name) => {
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name.toLowerCase()}`);
      if (response.data.length > 0) {
        setDogs(response.data);
      } else {
        window.alert("No existe la raza de perros indicada");
      }
    } catch (error) {
      window.alert("Ocurrió un error al buscar la raza de perro");
    }
  };

const onClose = (name) => {
  setDogs(dogs.filter((dog) => dog.name !== name));
};


  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Cards dogs={dogs} onClose={onClose} />}></Route>
        <Route path="/detail/:name" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
