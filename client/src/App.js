import './App.css';
import Routes from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
     </Routes>
    </div>
  );
}

export default App;
