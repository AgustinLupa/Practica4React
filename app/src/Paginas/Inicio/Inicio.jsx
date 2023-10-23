import React, { useState } from "react";
import { authenticateUser } from "../../Servicios/Login"; 
import { getUserInfo } from "../../Servicios/Login";
import image from "../../Utils/401.jpg";

const Inicio = (props) => {
  const [formData, setFormData] = useState({});
  const [loginResult, setLoginResult] = useState();

 

  /*
  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  */


  const HandleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Iniciar Sesión clickeado");
    //console.log("Credenciales:", formData.user_name, formData.password);

    try {
      setLoginResult (await authenticateUser(formData.user_name, formData.password));
      console.log("Token recibido:", loginResult);


      if (loginResult?.access_token) {
        props.setToken(loginResult);

        props.setIsLoggedIn(true);

       const userInfo = await getUserInfo(loginResult.access_token);
        console.log('Información del usuario:', userInfo);

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
      {loginResult?.error && (
        <div className='row'>
          <div className='col-sm-6 mb-3 mb-sm-0 offset-3' >
            <br />
              <div className="card" >
                <span>
                  <img src={image} class="card-img-top img-thumbnail" alt="error"/>
                </span>
              </div>
          </div>
        </div>
      )
      }
    </>
  );
};

export default Inicio;
