import { listarPokemonesFuego } from "../../Servicios/ListarFuego";

const VerPokemones = (props)  => {

    const pokemones= listarPokemonesFuego();

    return (
        <>
            <br /><br />
            <div class="card">
                <div class="card-body">
                    <h4>Lista de Pokemones de fuego</h4>
                    <br />
                    <ul class="list-group card-text">
                        {
                            //Aca iria un foreach de los pokemones
                        }
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default VerPokemones;