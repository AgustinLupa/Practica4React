import { GET } from "./PokeApi";

export async function listarPokemonesFuego() {
    let uri= "type/10/";

    let resp= await GET(uri);

    return resp;
}