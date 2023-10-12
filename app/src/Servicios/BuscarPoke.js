import { GET } from "./PokeApi";

export async function BuscarPoke(poke) {
    let uri= "pokemon/"+poke;

    let resp= await GET(uri);

    return resp;
}