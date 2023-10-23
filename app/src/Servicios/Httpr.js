//api del profe
const apiurl = "http://192.168.0.161:3001/api/";
//api express (apiusuarios)
const apiurlexpress = "http://localhost:3001/";

const apicats = "https://http.cat/";

export async function GET(url, request= null, token){
    
    let uri= "";
    if (request){
        uri= '?' + new URLSearchParams(request).toString();
    }

    return await fetch(apiurl + url + uri, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${token}` || ''
        }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

export async function POST(url, request, token= ''){

    return await fetch (apiurl + url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` || ''
        },
        body: JSON.stringify(request)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);

}

export async function GETcats(){
    const apicats = "https://http.cat//images/401.jpg";

    try {
        const response = await fetch(apicats, {
        method: 'GET',
        mode: 'cors',
        });

        if (response.ok) {
        const data = await response.json();
        return data;
        } else {
        throw new Error(`Error al cargar la imagen: ${response.status}`);
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        throw error;
    }
    /*apicats += "401";
    return await fetch({
        method: 'GET',
        mode: "cors",        
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);    
    */
}