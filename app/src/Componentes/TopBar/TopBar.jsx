import BaseButton from "../buttons/BaseButton";

const TopBar= (props) =>{

    const func = () => {
        console.log('botoncito presionadito')
    }

    return (        
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">PokeBusca</span>
                <div>
                    <BaseButton text="Inicio" callBack={func}/>
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

export default TopBar