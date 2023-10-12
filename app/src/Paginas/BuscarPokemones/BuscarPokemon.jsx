import FormularioPoke from "../../Componentes/FormularioPoke/FormularioPoke"

const BuscarPokemon= (props)=> {
    return(
        <>

            <div class="card">
                <div class="card-body align-content-center">
                    { <FormularioPoke text="Buscar Pokemon" funcion={ props.BuscarPokemon} />}
                </div>
            </div>
        </>
    )
}

export default BuscarPokemon;