import { useState } from "react";
import FormularioPoke from "../../Componentes/FormularioPoke/FormularioPoke";
import "./Inicio.css"

const Inicio = (props) =>{

    const [formData, setFormData]= useState({});

    const HandleOnChange = (e) => {
        console.log(e.target.value);
    }

    return (
    <>
        <div class="card">
            <div class="card-body bienvenida">
                 <h1> bienvenido a buscar poke </h1> 
            </div>
        </div>
        <br />
        <div class="card">
            <div class="card-body">
                <br />
                <form class="row g-3">
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Usuario</label>
                        <div class="col-sm-10">
                            <input onChange={(e) => setFormData({...formData, user_name:e.target.value})} type="text" class="form-control" id="user_name" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input onChange={(e) => setFormData({...formData, password:e.target.value})} type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Log in</button>
                    </div>
                </form>
            </div>
        </div>
   </>
    )
}

export default Inicio;