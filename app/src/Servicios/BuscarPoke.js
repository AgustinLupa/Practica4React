import { GET } from "./Httpr";

export async function BuscarPoke(poke) {
    let uri= "pokemon/"+poke;

    let resp= await GET(uri);

    return resp;
}