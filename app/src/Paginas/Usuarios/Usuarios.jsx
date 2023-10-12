import React, { useState } from 'react';

const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '' });
  const [busqueda, setBusqueda] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);

  const handleCrearUsuario = (e) => {
    e.preventDefault();
    
    setUsuarios([...usuarios, nuevoUsuario]);
   
    setNuevoUsuario({ nombre: '', email: '' });
  };

  const handleBuscarUsuarios = () => {
    
    const resultados = usuarios.filter((usuario) =>
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultadoBusqueda(resultados);
  };

  return (

    
    <div>
      <h1>Admin Usuarios</h1>
      
      <h2>Crear Usuario</h2>
      <form onSubmit={handleCrearUsuario}>
        <label>
          Nombre:
          <input
            type="text"
            value={nuevoUsuario.nombre}
            onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={nuevoUsuario.email}
            onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}
          />
        </label>
        <button type="submit">Crear</button>
      </form>

      <h2>Buscar Usuarios</h2>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button onClick={handleBuscarUsuarios}>Buscar</button>

      <h3>Resultados de la Búsqueda</h3>
      <ul>
        {resultadoBusqueda.map((usuario) => (
          <li key={usuario.email}>{usuario.nombre} - {usuario.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuario;
