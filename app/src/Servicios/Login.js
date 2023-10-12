import { POST } from "./Httpr";

const ApiUrl= "http://192.168.0.133:3001/api/";

export const LogIn= async (data) => {
    // console.log(data);
    // return await fetch(ApiUrl + "auth/login", {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }).then((res) => res.json())
    //     .then((res) => console.log(res));

    let uri= "auth/login";

    let resp= await POST(uri, data);

    return resp;
}