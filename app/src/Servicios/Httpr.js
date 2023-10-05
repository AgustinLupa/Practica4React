const Apiurl= " https://pokeapi.co/api/v2/";

export async function GET(url){
    return await fetch(Apiurl + url.toLowerCase())
    .then((res)=> res.json())
    .then((res)=>res)
    .catch((err) => err);
}