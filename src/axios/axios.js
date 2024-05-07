import axios from "axios";


let Instance = axios.create({
    baseURL : "http://localhost:3000"
})

async function postFunction(url,data) {
    try{
        let response = await Instance.post(url, data ?? {})
        return response
    }catch(err){
        return {
            msg : "Fail to send post request",
            status : 400,
            data : err
        }
    }
}
async function getFunction (url) {
    try{
        let response = await Instance.get(url)
        return response
    }catch(err){
        return {
            msg : "Fail to send post request",
            status : 400
        }
    }
}
export {postFunction, getFunction}