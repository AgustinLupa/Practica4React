import React, { useState } from 'react';
import './Usuarios.css';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', contraseña: '' }); // Cambié 'email' a 'contraseña'
  const [busqueda, setBusqueda] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);

  const handleCrearUsuario = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, nuevoUsuario]);
    setNuevoUsuario({ nombre: '', contraseña: '' }); // Cambié 'email' a 'contraseña'
  };

  const handleBuscarUsuarios = () => {
    const resultados = usuarios.filter((usuario) =>
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultadoBusqueda(resultados);
  };

  return (
    <div className="usuario-container">
      <h1>Usuarios</h1>

      <h2 className="crear-usuario">Crear Usuario</h2>
      <form onSubmit={handleCrearUsuario}>
        <div className="input-container">
          <label>
            Nombre:
            <input
              type="text"
              value={nuevoUsuario.nombre}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
              class="col-sm-8 col-form-label"
            />
          </label>
        </div>
        <div className="usuario-container">
          <label>
            Contraseña:
            <input
              type="password"
              value={nuevoUsuario.contraseña}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, contraseña: e.target.value })}
              class="col-sm-8 col-form-label"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>

      <h2 className="buscar-usuario">Buscar Usuarios</h2>
      <div className="inputnpm-container">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          class="col-sm-2 col-form-label"
        />
      </div>
      <button onClick={handleBuscarUsuarios} className="btn btn-primary">Buscar</button>

      <h3>Resultados de la Búsqueda</h3>
      <ul className="resultados-busqueda">
        {resultadoBusqueda.map((usuario) => (
          <li key={usuario.contraseña}>{usuario.nombre} - {usuario.contraseña}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
