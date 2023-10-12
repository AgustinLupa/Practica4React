import { useEffect } from "react";
import { listarPokemonesFuego } from "../../Servicios/ListarFuego";

let request= await listarPokemonesFuego();

const VerPokemones = (props)  => {

    

    // useEffect(() => {
    //     request= listarPokemonesFuego();        
    //     console.log(request);
    // }, [])

    return (
        <>
            <br /><br />
            <div class="card">
                <div class="card-body">
                    <h4>Lista de Pokemones de fuego</h4>
                    <br />
                    <ul class="list-group card-text">
                        {
                            request.pokemon.map( (item) => {
                                return(
                                    <>
                                        <li class="list-group-item">{item.pokemon.name}</li>
                                    </>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )

}

export default VerPokemones;