import "./TopBar.css"

import BaseButton from "../buttons/BaseButton";
import BuscarPokemon from "../../Paginas/BuscarPokemones/BuscarPokemon";
import VerPokemones from "../../Paginas/VerPokemones/VerPokemones";
import Inicio from "../../Paginas/Inicio/Inicio";
import Usuarios from "../../Paginas/Usuarios/Usuarios";
import React, { useState, useEffect } from 'react';


const TopBar= (props) =>{

    const [token, setToken]= useState({});

    const MENU= [
        {
            pagina: <Inicio setToken={setToken}/>,
            titulo: "Inicio"
        },
        {
            pagina: <BuscarPokemon />,
            titulo: "Buscar Pokemon"
        },
        {
            pagina: <VerPokemones />,
            titulo: "Ver Pokemones de Fuego"
        },
        {
            pagina: <Usuarios />,
            titulo: "Usuarios"
        },
    ]

    useEffect (() => {
        props.setPaginaActual(<Inicio />);
    }, [])

    return (        
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">PokeBusca</span>
                <div>
                    {
                        MENU.map((item) => {
                            return (
                                <BaseButton class="btn btn-primary menu-button" text={item.titulo} callBack={props.setPaginaActual} params={item.pagina}/>
                            );
                        })
                    }
                </div>                
            </div>
        </nav>
    )
}

export default TopBar;