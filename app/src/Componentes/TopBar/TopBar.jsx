import BaseButton from "../buttons/BaseButton";
import Inicio from "../../Paginas/Inicio";
import BuscarPokemon from "../../Paginas/BuscarPokemones";
import VerPokemones from "../../Paginas/VerPokemones/VerPokemones";


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



    const func = () => {
        console.log('botoncito presionadito')
    }

    return (        
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">PokeBusca</span>
                {
                    MENU.map((item) => {
                        return (
                            <BaseButton text={item.titulo} callBack={props.setPaginaActual(item.pagina)}/>
                        );
                    })
                }
                <div>
                    <BaseButton text="Inicio" callBack={props.setPaginaActual}/>
                </div>
                <div>
                    <BaseButton text="Buscar Pokemon" callBack={func}/>
                </div>
                <div>
                    <BaseButton text="Ver Pokemones de Fuego" callBack={func}/>
                </div>
            </div>
        </nav>
    )
}

export default TopBar;