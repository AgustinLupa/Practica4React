import React, { useState, useEffect } from 'react';
import BaseButton from '../buttons/BaseButton';
import BuscarPokemon from '../../Paginas/BuscarPokemones/BuscarPokemon';
import VerPokemones from '../../Paginas/VerPokemones/VerPokemones';
import Inicio from '../../Paginas/Inicio/Inicio';
import Usuarios from '../../Paginas/Usuarios/Usuarios';

const TopBar = (props) => {
  const [token, setToken] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const MENU = [
    {
      pagina: <BuscarPokemon />,
      titulo: 'Buscar Pokemon',
      key: 1,
    },
    {
      pagina: <VerPokemones />,
      titulo: 'Ver Pokemones de Fuego',
      key: 2,
    },
    {
      pagina: <Usuarios />,
      titulo: 'Usuarios',
      key: 3,
    },
  ];

  function setPagina(i) {
    props.setPaginaActual(MENU[i].pagina);
  }

  function closeSession(){
    localStorage.clear('token');
    props.setPaginaActual(<Inicio setToken={setToken} setPagina={setPagina} setIsLoggedIn={setIsLoggedIn} />)
    window.location.reload(false);
  }

  useEffect(() => {
    let jwt= localStorage.getItem('token');
    if (jwt){
      setIsLoggedIn(true);
      props.setPaginaActual(
        <VerPokemones />
      );
    } else {
      props.setPaginaActual(
        <Inicio setToken={setToken} setPagina={setPagina} setIsLoggedIn={setIsLoggedIn} />
      );
    }
  }, []);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">PokeBusca</span>
        <div>
          { isLoggedIn &&     
          <>
            {
              MENU.map((item, index) =>{ 
                // if(isLoggedIn){
                //   return (
                //     <BaseButton
                //       key={index} // Clave única basada en el índice  
                //       className="btn btn-primary menu-button"
                //       text={item.titulo}
                //       callBack={props.setPaginaActual}
                //       params={item.pagina}
                //     />
                //   );
                // } else {
                //   return (
                //     <></>
                //   );
                // }
                return (
                  <BaseButton
                    key={index} // Clave única basada en el índice  
                    className="btn btn-primary menu-button"
                    text={item.titulo}
                    callBack={props.setPaginaActual}
                    params={item.pagina}
                  />
                );
              })
            }
            <button onClick={closeSession} className='btn btn-danger menu-button'><i class="bi bi-box-arrow-left"></i></button>
          </>     
           
          }
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
