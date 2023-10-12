// app.js

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
  
    const user = users.find((user) => user.username === username);
  
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }
  
    if (user.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
  
    // Genera un token de autenticación utilizando jsonwebtoken
    const token = jwt.sign({ username: user.username }, 'tu_secreto_secreto', {
      expiresIn: '1h', // El token expira en 1 hora (ajusta esto según tus necesidades)
    });
  
    res.json({ message: 'Inicio de sesión exitoso', token });
  });
app.listen(port, () => {
  console.log(`Servidor corriendo pa en http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi servidor Node.js con Express!');
  });