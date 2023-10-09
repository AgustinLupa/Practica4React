const Apiurl= " https://pokeapi.co/api/v2/";

export async function GET(url){
    return await fetch(Apiurl + url.toLowerCase(), {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res)=> res.json())
    .then((res)=>res)
    .catch((err) => err);
}