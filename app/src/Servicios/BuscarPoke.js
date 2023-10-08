import { GET } from "./Httpr";

export async function BuscarPokemon(poke) {
    let uri= "pokemon/"+poke;

    let resp= await GET(uri);

    return resp;
}