import { GET, POST } from "./Httpr";

export async function authenticateUser(username, password){
  const uri= 'auth/login';

  let user = {
    // es user_name o username? segun la api?
    username: username,
    password: password
  }

  let resp= await POST(uri, user);

  return resp;
}

export async function getUserInfo(token){
  const uri= 'auth/me';

  let resp= await GET(uri, '', token);

  return resp;
}


// export async function authenticateUser(username, password) {
//     try {
//       const response = await fetch('http://localhost:3001/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         const token = data.token;
//         return token;
//       } else {
//         console.error('Error en el inicio de sesión');
//         return null;
//       }
//     } catch (error) {
//       console.error('Error en el inicio de sesión:', error);
//       return null;
//     }
//   }

  // export async function getUserInfo(token) {
  //   try {
  //     const response = await fetch('http://localhost:3001/auth/me', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': token,
  //       },
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();
  //       return data;
  //     } else {
  //       console.error('Error al obtener información del usuario');
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error('Error al obtener información del usuario:', error);
  //     return null;
  //   }
  // }
  