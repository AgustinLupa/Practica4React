import React, { useState, useEffect } from 'react';
import BaseButton from '../buttons/BaseButton';
import BuscarPokemon from '../../Paginas/BuscarPokemones/BuscarPokemon';
import VerPokemones from '../../Paginas/VerPokemones/VerPokemones';
import Inicio from '../../Paginas/Inicio/Inicio';
import Usuarios from '../../Paginas/Usuarios/Usuarios';

const TopBar = (props) => {
  const [token, setToken] = useState({});

  const MENU = [
    {
      pagina: <Inicio setToken={setToken} />,
      titulo: 'Inicio',
    },
    {
      pagina: <BuscarPokemon />,
      titulo: 'Buscar Pokemon',
    },
    {
      pagina: <VerPokemones />,
      titulo: 'Ver Pokemones de Fuego',
    },
    {
      pagina: <Usuarios />,
      titulo: 'Usuarios',
    },
  ];

  useEffect(() => {
    props.setPaginaActual(<Inicio />);
  }, []);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">PokeBusca</span>
        <div>
          {MENU.map((item, index) => (
            <BaseButton
              key={index} // Agrega una key única para cada elemento
              className="btn btn-primary menu-button" 
              text={item.titulo}
              callBack={props.setPaginaActual}
              params={item.pagina}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
