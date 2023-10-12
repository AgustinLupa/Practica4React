import React, { useState, useEffect } from 'react';
import './Usuarios.css';
import { obtenerUsuarios } from '../../Servicios/Usuarios';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', contraseña: '' });
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
    setUsuarios([...usuarios, nuevoUsuario]);
    setNuevoUsuario({ nombre: '', contraseña: '' });
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
            Nombre: {usuario.nombre}, Contraseña: {usuario.contraseña}
          </li>
        ))}
      </ul>

      <h3>Lista de Usuarios</h3>
      <ul className="usuarios-list">
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            Nombre: {usuario.nombre}, Contraseña: {usuario.contraseña}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
