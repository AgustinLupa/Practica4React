import "./TopBar.css"

import BaseButton from "../buttons/BaseButton";
import BuscarPokemon from "../../Paginas/BuscarPokemones/BuscarPokemon";
import VerPokemones from "../../Paginas/VerPokemones/VerPokemones";
import Inicio from "../../Paginas/Inicio/Inicio";
import { useEffect } from "react";


const MENU= [
    {
        pagina: <Inicio />,
        titulo: "Inicio"
    },
    {
        pagina: <BuscarPokemon />,
        titulo: "Buscar Pokemon"
    },
    {
        pagina: <VerPokemones />,
        titulo: "Ver Pokemones de Fuego"
    }
]

const TopBar= (props) =>{

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