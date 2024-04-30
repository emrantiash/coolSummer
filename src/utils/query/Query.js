import Network from "../network/Network";
import axios from 'axios';
import cookieCutter from 'cookie-cutter';
import cookiesNames from '../constant/Constant';
import * as CryptoJS from 'crypto-js';
import Utf8 from 'crypto-js/enc-utf8';



export default function  getHeaderFunction(){


  try {
    const decrypted = CryptoJS.AES.decrypt(cookieCutter.get(cookiesNames.HOW_THIS_MEASUREMENT_IS), import.meta.env.VITE_HOST).toString(Utf8);
    //  const decrypted = ''
    const
      headers = {
        Authorization: 'Bearer ' + decrypted,
        Accept: 'application/json',
      }
      return headers
    
  }
  catch (error) {
    return ''
  }
}
// get 

export function get(end) {

  const headers = getHeaderFunction()
   console.log(Network.network + end, { headers })
  return axios.get(Network.network + end, { headers } )
}

// custom-get 

export function customget(end,data) {

  const headers = getHeaderFunction()
   console.log(Network.network + end+data, { headers })
  return axios.get(Network.network + end+data, { headers } )
}

// post

export function post(end, data) {
  const headers = getHeaderFunction()
  console.log(Network.network + end, data, {headers})
  return axios.post(Network.network + end, data, {headers})
}

export function tokenpost(data) {
  const headers = getHeaderFunction()
  console.log(Network.authToken , data, )
  return axios.post(Network.authToken , data )
}

// put

export function put(end, data) {

  const headers = getHeaderFunction()
  return axios.put(Network.network + end, data, { headers })
}



