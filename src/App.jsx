import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  // TODO: refactorizar y abstraer la ui que devuelve la tarea en otro componente
  // TODO: refactorizar y desacoplar el componente input de App

  // Este handler se ocupa de capturar lo que el user escribe en el input
  const handleOnChange = (e) => {
    setTarea(e.target.value);
  };

  // Esta funcion se encarga de añadir en el array de taras las tareas que se van agregando
  const agregarTarea = (e) => {
    e.preventDefault();
    // validacion
    if (tarea.trim() === "") return;

    setTareas([...tareas, tarea]);
    setTarea("");
  };

  return (
    <main>
      <h1>Mi lista de tareas</h1>

      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Escribi una tarea"
          value={tarea}
          onChange={handleOnChange}
        />

        <button type="submit">Agregar Tarea</button>
      </form>

      <ul>
        {tareas.map((item) => (
          <li key={uuidv4()}>{item}</li>
        ))}
      </ul>
    </main>
  );
};

export default App;
