import { GET, POST, PUT } from "./Httpr";

export const Create=async (data) => {

    let uri = "user/create";

    let resp = await POST(uri,data);

    return resp;

}

export const Search=async (data) =>{

    const uri = "user/search";

    let resp = await GET(uri,data);

    return resp;
}

export const Update= async (data) =>{
    const uri= "user/edit";

    let resp = await PUT(uri, data);

    return resp;
}

