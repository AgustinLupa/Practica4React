import { GET, POST } from "./Httpr";

export const Create=async (data , token) => {

    let uri = "user/create";

    let resp = await POST(uri,data,token);

    return resp;

}

export const Search=async (user_name, page,token) =>{

    const uri = "user/search";

    let data= 'user_name='+user_name+'&page='+page;

    let resp = await GET(uri,data,token);

    return resp;
}

