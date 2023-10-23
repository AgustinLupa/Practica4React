//api del profe
const apiurl = "http://192.168.0.161:3001/api/";
//api express (apiusuarios)
const apiurlexpress = "http://localhost:3001/";

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