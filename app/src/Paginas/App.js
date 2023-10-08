import { useState } from 'react';
import TopBar from '../Componentes/TopBar/TopBar';
import './App.css';

function App() {

  const [paginaActual, setPaginaActual] = useState();

  return (
    <div className="App">
      <TopBar setPaginaActual={setPaginaActual}/>
      {
        paginaActual
      }
    </div>
  );
}

export default App;
