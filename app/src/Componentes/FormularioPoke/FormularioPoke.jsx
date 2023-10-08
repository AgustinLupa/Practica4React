import BaseButton from "../buttons/BaseButton";

const FormularioPoke = (props)=>{
    return (
        <div class="row">             
            <div class="col">
                <label for="inputPassword2">Buscar Pokemon</label>
                <input type="text" class="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <div class="col">
                <BaseButton text="Buscar Pokemon"></BaseButton>
            </div>
        </div>
    )
}

export default FormularioPoke;