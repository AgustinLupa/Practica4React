import React, { useState } from "react";
import { authenticateUser } from "../../Servicios/Login"; 
import { getUserInfo } from "../../Servicios/Login"; 

const Inicio = (props) => {
  const [formData, setFormData] = useState({}); 

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log("Iniciar Sesión clickeado");
    console.log("Credenciales:", formData.user_name, formData.password);

    try {
      const token = await authenticateUser(formData.user_name, formData.password);
      console.log("Token recibido:", token);


      if (token) {
        props.setToken(token);

        props.setIsLoggedIn(true);

        props.setPagina(1);
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-body bienvenida">
          <h1>Bienvenido a buscar poke</h1>
        </div>
      </div>
      <br />
      <div className="card py-2">
        <div className="card-body">
          <form className="row g-3">
            <br />
            <div className="row mb-3">
              <label htmlFor="user_name" className="col-sm-2 col-form-label">
                Usuario
              </label>
              <div className="col-sm-10">
                <input
                  onChange={e => setFormData({...formData, user_name: e.target.value})}
                  type="text"
                  className="form-control"
                  id="user_name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                Contraseña
              </label>
              <div className="col-sm-10">
                <input
                   onChange={e => setFormData({...formData, password: e.target.value})}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <div className="col-12">
              <button onClick={HandleSubmit} className="btn btn-primary">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Inicio;
