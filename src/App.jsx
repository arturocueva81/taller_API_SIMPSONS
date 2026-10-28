import { useEffect, useState } from "react";
import PersonajeCard from "./components/PersonajeCard";

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const response = await fetch("https://thesimpsonsapi.com/api/characters");
        const datos = await response.json();
        setPersonajes(datos.results.slice(0,20));
      } catch (error) {
        console.log("Error al obtener personajes:", error);
      }
    };

    obtenerPersonajes();
  }, []); 

  return (
    <div>
      <h1>The Simpsons</h1>
      {}
      <div className="cuadricula">
        {personajes.map((personaje) => (
          <PersonajeCard key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}

export default App;