import React, { useState } from "react";
import { authenticateUser } from "../../Servicios/Login"; 
import { getUserInfo } from "../../Servicios/Login"; 

const Inicio = (props) => {
  const [formData, setFormData] = useState({
    user_name: '',
    password: '',
  });

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log("Iniciar Sesión clickeado");
    console.log("Credenciales:", formData.user_name, formData.password);

    try {
      const token = await authenticateUser(formData.user_name, formData.password);
      console.log("Token recibido:", token);

      if (token) {
        props.setToken(token);

        const userInfo = await getUserInfo(token);
        console.log('Información del usuario:', userInfo);
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
      <div className="card">
        <div className="card-body">
          <form className="row g-3">
            <br />
            <div className="row mb-3">
              <label htmlFor="user_name" className="col-sm-2 col-form-label">
                Usuario
              </label>
              <div className="col-sm-10">
                <input
                  onChange={HandleOnChange}
                  type="text"
                  className="form-control"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                Contraseña
              </label>
              <div className="col-sm-10">
                <input
                  onChange={HandleOnChange}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  name="password"
                  value={formData.password}
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
