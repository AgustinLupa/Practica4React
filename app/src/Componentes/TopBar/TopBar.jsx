import React, { useState, useEffect } from 'react';
import BaseButton from '../buttons/BaseButton';
import BuscarPokemon from '../../Paginas/BuscarPokemones/BuscarPokemon';
import VerPokemones from '../../Paginas/VerPokemones/VerPokemones';
import Inicio from '../../Paginas/Inicio/Inicio';
import Usuarios from '../../Paginas/Usuarios/Usuarios';
import Login from '../Login/Login';

const TopBar = (props) => {
  const [token, setToken] = useState({});

  const MENU = [
    {
      pagina: <Inicio setToken={setToken} />, // Asegúrate de pasar setToken correctamente
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
    props.setPaginaActual(<Inicio setToken={setToken} />); // Asegúrate de pasar setToken correctamente
  }, []);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">PokeBusca</span>
        <div>
          {MENU.map((item, index) => (
            <BaseButton
              key={index}
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
