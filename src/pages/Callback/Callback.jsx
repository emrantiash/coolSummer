import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAll } from "../../redux/slices/loginSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import cookieCutter from "cookie-cutter";
import cookiesNames from "../../utils/constant/Constant";
import * as CryptoJS from "crypto-js";
import Network from "../../utils/network/Network";
const apiKey = import.meta.env.VITE_HOST;
// admin@admin.com
// tiashiit904@gmail.com

const _secretkey = "6EMDpIrJDij60IX4QdAnMWy2T1kuDO1wPLCCnjHC";

export default function page() {
  const dispatch = useDispatch();
  const param = useParams();
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get("code");
  const [atoken, setAtoken] = useState("");
  const data = useSelector((state) => state.loginReducer.data);

  // console.log(data);

  useEffect(() => {
    const data = new FormData();
    data.append("grant_type", "authorization_code");
    data.append("client_id", 1);
    data.append("redirect_uri", Network.redirect_uri);
    // data.append("redirect_uri", "http://localhost:5173");
    data.append("code", code);
    data.append("client_secret", _secretkey);
    // data.append("Access-Control-Allow-Origin", "*");

    axios.post(Network.token, data).then((resp) => {
      console.log(resp.data.access_token);
      setAtoken(resp.data.access_token);
      dispatch(setAll(resp.data.access_token));
      const encrypted = CryptoJS.AES.encrypt(resp.data.access_token,apiKey).toString();//resp.data.access_token //
      console.log(resp.data.access_token)
      cookieCutter.set(cookiesNames.HOW_THIS_MEASUREMENT_IS, encrypted);
      window.location.href = "/";
      // set token and islogin to loginSlice herer
    });
    //  dispatch(setLogin(data))
  }, []);

  // useEffect(()=>{
  //   let  headers ;
  //   atoken != "" && (

  //     headers = {
  //       Authorization: 'Bearer ' + atoken,
  //       Accept: 'application/json',
  //     },

  //   console.log('http://10.3.2.29:8003/api/user', { headers }),
  //   axios.get('http://10.3.2.29:8003/api/user', { headers } ).then(function(e){
  //     console.log(e)
  //   })
  //   )

  // },[atoken != ""])

  return (
    <section className="leading-normal tracking-normal text-suitefontblack mt-12 pt-52 mx-10 md:mx-0 bg-gradient-to-b from-blue-50 to-gray-50">
      {/* <div>{code}</div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    </section>
  );
}
