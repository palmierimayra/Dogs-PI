import { useState } from 'react';

export default function Pagination ({pagina, setPagina, maximo}) {

    const [input, setInput] = useState(1);
    
    const previousPage = () => {
        setInput(input - 1);
        setPagina(pagina - 1);
    }

    const nextPage = () => {
        setInput(input + 1);
        setPagina(pagina + 1);
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            setPagina(parseInt(e.target.value))
            if(parseInt(e.target.value)<1 || parseInt(e.target.value)>Math.ceil(maximo) || isNaN(parseInt(e.target.value))) {
                setPagina(1);
                setInput(1);
            } else {
                setPagina(parseInt(e.target.value))
            }
        }
    };

    const onChange = (e) => {
        setInput(e.target.value);
    };

return (
    <div>
        <button onClick={previousPage}>Anterior</button>
        <input onChange={onChange} onKeyDown={(e) => {onKeyDown(e)}}value={input}/>
        <p>de {Math.ceil(maximo)}</p>
        <button onClick={nextPage}>Siguiente</button>
    </div>
)
};
