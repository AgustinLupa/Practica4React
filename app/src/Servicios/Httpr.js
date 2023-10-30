
//api del profe
const apiurl = "http://192.168.0.161:3001/api/";
//api express (apiusuarios)
const apiurlexpress = "http://localhost:3001/";

const apicats = "https://http.cat/";

export async function GET(url, request= null){
    
    let uri= "";
    if (request){
        uri= '?' + new URLSearchParams(request).toString();
    }

    return await fetch(apiurl + url + uri, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` || ''
        }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

export async function POST(url, request){

    return await fetch (apiurl + url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` || ''
        },
        body: JSON.stringify(request)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);

}

export async function PUT(url, request){
    return await fetch (apiurl + url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` || ''
        },
        body: JSON.stringify(request)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}
