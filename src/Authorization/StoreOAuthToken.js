import Axios from 'axios'
import Cookies from  'js-cookie'

const storeBasicInstToken = function(shortToken){
    let data = {
        userId:Cookies.get("id"),
        token:Cookies.get("sessionToken"),//Auth token from cookies
        instShortToken:shortToken 
    }
    return Axios.post("http://localhost:5050/basic_inst_token/", data)
} 

export {
    storeBasicInstToken
}