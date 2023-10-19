const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
  },
];

const jwt = require('jsonwebtoken');

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  console.log("Solicitud de inicio de sesión recibida");
  console.log("Usuario:", username);
  console.log("Contraseña:", password);

  const user = users.find((user) => user.username === username);

  if (!user) {
    console.log("Usuario no encontrado");
    return res.status(401).json({ message: 'Usuario no encontrado' });
  }

  if (user.password !== password) {
    console.log("Contraseña incorrecta");
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  // Genera un token de autenticación utilizando jsonwebtoken(JWT)
  const token = jwt.sign({ username: user.username }, 'tu_secreto_secreto', {
    expiresIn: '1h', // El token expira en 1 hora 
  });

  console.log("Inicio de sesión exitoso");
  res.json({ message: 'Inicio de sesión exitoso', token });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.get('/', (req, res) => {
  console.log("Solicitud en la ruta raíz");
  res.send('¡Bienvenido a mi servidor Node.js con Express!');
});
