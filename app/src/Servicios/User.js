import { POST } from "./Httpr";

export const Create=async (data , token) => {

    let uri = "user/create";

    let resp = await POST(uri,data,token);

    return resp;

}

export const Search=async (user_name, page,token) =>{

    let uri = "user/search";

    let resp = await GET (uri,data,token);

    return resp;
}

