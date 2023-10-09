import BaseButton from "../buttons/BaseButton";

const FormularioPoke = (props)=>{
    return (
        /*<div class="row">             
            <div class="col">
                <label for="nombre">Buscar Pokemon</label>
                <input type="text" class="form-control" id="nombre" placeholder="Nombre de pokemon" />
                <BaseButton text="Buscar Pokemon" callback={props.BuscarPokemon}></BaseButton>
            </div>            
        </div> */
        <form class="row row-cols-lg-auto g-3 align-items-center">
            <div class="col-12">
                <label class="visually-hidden" for="inlineFormInputGroupUsername">Pokemon</label>
                <div class="input-group">                
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Pokemon"/>
                </div>
            </div>
            <div class="col-12">
                <BaseButton text="Buscar Pokemon" callback={props.BuscarPokemon}></BaseButton>
            </div>
        </form>
    )
}

export default FormularioPoke;