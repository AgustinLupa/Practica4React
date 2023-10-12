import React, { useState, useEffect } from 'react';
import './Usuarios.css';
import { obtenerUsuarios } from '../../Servicios/Usuarios';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ name: '', username: '' });
  const [busqueda, setBusqueda] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const data = await obtenerUsuarios();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al cargar los usuarios', error);
      }
    }

    fetchUsuarios();
  }, []);

  const handleCrearUsuario = (e) => {
    e.preventDefault();
    
    setUsuarios([...usuarios, { name: nuevoUsuario.name, username: nuevoUsuario.username }]);
    setNuevoUsuario({ name: '', username: '' });
  };

  const handleBuscarUsuarios = () => {
    const resultados = usuarios.filter((usuario) =>
      usuario.name.toLowerCase().includes(busqueda.toLowerCase()) 
    );
    setResultadoBusqueda(resultados);
  };

  return (
    <div className="usuario-container">
      <h1>Usuarios</h1>

      <h2 className="crear-usuario">Crear Usuario</h2>
      <form onSubmit={handleCrearUsuario}>
        <div className="input-container">
          <label htmlFor="nombre">
            Nombre:
            <input
              type="text"
              id="nombre"
              value={nuevoUsuario.name} 
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, name: e.target.value })} 
            />
          </label>
        </div>
        <div className="usuario-container">
          <label htmlFor="contraseña">
            Nombre de usuario:
            <input
              type="text"
              id="username"
              value={nuevoUsuario.username} // Adaptar a la propiedad 'username' de la API
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, username: e.target.value })} // Adaptar a 'username'
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>

      <h2 className="buscar-usuario">Buscar Usuarios</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button onClick={handleBuscarUsuarios} className="btn btn-primary">
          Buscar
        </button>
      </div>

      <h3>Resultados de la Búsqueda</h3>
      <ul className="resultados-busqueda">
        {resultadoBusqueda.map((usuario) => (
          <li key={usuario.id}>
            Nombre: {usuario.name}, Nombre de usuario: {usuario.username}
          </li>
        ))}
      </ul>

      <h3>Lista de Usuarios</h3>
      <ul className="usuarios-list">
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            Nombre: {usuario.name}, Nombre de usuario: {usuario.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
