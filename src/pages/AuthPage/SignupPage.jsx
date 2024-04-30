import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarLogin from "../../components/Navbar_Login";
import SignupPageImage from "../../assets/layout/SignupPageImage.png";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { signup, varifyEmail } from "../../redux/slices/loginSlice";
import {
  EyeIcon,
  EyeSlashIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/outline";
import GoogleIcon from "../../assets/social/google.svg";
import LinkedInIcon from "../../assets/social/linkedin.svg";
import MicrosoftIcon from "../../assets/social/microsoft.svg";
import MonstarSuiteLogo from "../../assets/logo/MonstarSuiteWhite.png";
import { Link } from "react-router-dom";
import { faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import cookieCutter from 'cookie-cutter';
import cookiesNames from '../../utils/constant/Constant';
import * as CryptoJS from 'crypto-js';
import useIsLogin from "../../lib/hooks/isLogin";

const apiKey = import.meta.env.VITE_HOST;
var _email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function SignupPage() {
  const dispatch = useDispatch();
  const isLogin = useIsLogin()
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [emailFlag, setEmailFlag] = useState(false);
  const [passFlag, setPassFlag] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userField, setUserField] = useState({
    email: "",
    password: "",
  });
  const [userOtp, setUserOtp] = useState({
    one: "",
    two: "",
    three : "",
    four : ""
  });

  useEffect(()=>{
    if(isLogin[0])
    window.location.href = "/" 
  },[isLogin[0]])

  const changeHandlerOTP = (e) =>{
    const { name, value } = e.target;
    console.log(name,value)
    setUserOtp({
      ...userOtp,
      [e.target.name]: e.target.value,
    });

  }

  const changeUserFieldHandler = (e) => {
    const { name, value } = e.target;
    if (name == "email") {
      if (value.match(_email)) {
        setError(false);
      } else setError(true);
    }

    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const _agreed = (e) => {
    e.target.checked ? setPolicy(true) : setPolicy(false);
  };

  const _submit = () => {
    setLoading(true);
    userField.email == "" ? setEmailFlag(true) : setEmailFlag(false);
    userField.password == "" ? setPassFlag(true) : setPassFlag(false);

    if (!error && userField.email != "" && userField.password != "" && policy) {
      setLoading(true);
      let option = {
        email: userField.email,
        password: userField.password,
      };
      dispatch(signup(option)).then(function (e) {
        setLoading(false);
        e.payload && setIsSubmit(true);
       
        
      });
    } else {
      setLoading(false);
    }
  };

  const _varifyEmail = () =>{
    setLoading(true);
    let option = {
      email : userField.email,
      password : userField.password,
      security_code : userOtp.one + userOtp.two + userOtp.three + userOtp.four
    }

   if(option.security_code != ""){
    setLoading(true);
    dispatch(varifyEmail(option)).then(function(e){
      console.log(e)
      e.payload && setLoading(false);
      const encrypted = CryptoJS.AES.encrypt(e.payload.access_token, apiKey).toString()
          cookieCutter.set(cookiesNames.HOW_THIS_MEASUREMENT_IS, encrypted) 
          window.location.href = "/";
    });
   }
     
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-suitefontblack">
        <div className="col-span-1 mx-10 md:mx-5">
          <span className="hidden lg:flex">
            <NavbarLogin />
          </span>

          <div className="flex flex-col justify-center items-center lg:mt-5 min-h-screen lg:min-h-0">
            <Link to="/">
              <img
                src={MonstarSuiteLogo}
                alt="MonstarSuite Logo"
                className="w-48 mx-auto mb-5 lg:hidden select-none pointer-events-none"
              />
            </Link>
            <div className="w-full sm:w-3/4 space-y-10">
              <h1 className="hidden lg:text-3xl font-medium mb-5 lg:flex lg:justify-center">
                Start Your Journey Today!
              </h1>
              <div className="w-full space-y-5">
                <div className="space-y-8">
                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    size="lg"
                    className="bg-gray-100"
                    icon={<AtSymbolIcon className="text-gray-500" />}
                    shrink={true}
                    onChange={(e) => changeUserFieldHandler(e)}
                    style={{ borderColor: (error || emailFlag) && "red" }}
                  />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    size="lg"
                    className="bg-gray-100"
                    icon={
                      showPassword ? (
                        <EyeSlashIcon
                          className="text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <EyeIcon
                          className="text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )
                    }
                    shrink={true}
                    onChange={(e) => changeUserFieldHandler(e)}
                    style={{ borderColor: passFlag && "red" }}
                  />
                </div>
                {isSubmit ? (
                  <>
                    <Typography>OTP</Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        // backgroundColor : 'red'
                      }}
                    >
                      <Input
                        name="one"
                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[10px]" }}
                        onChange={(e) => changeHandlerOTP(e)}
                      />
                      <Input
                        name="two"
                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[10px]" }}
                        onChange={(e) => changeHandlerOTP(e)}
                      />
                      <Input
                        name="three"
                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[10px]" }}
                        onChange={(e) => changeHandlerOTP(e)}
                      />
                      <Input
                        name="four"
                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[10px]" }}
                        onChange={(e) => changeHandlerOTP(e)}
                      />
                    </div>
                    <Button 
                    type="submit"
                    loading={loading}
                    disabled={loading}
                    color="green" 
                      onClick={_varifyEmail}
                    >Submit OTP</Button>
                  </>
                ) : (
                  <>
                    <div className="flex justify-cetner items-center text-sm text-nowrap gap-2">
                      <span className="-ml-3">
                        <Checkbox
                          label="I agree to the Terms of Services and Privacy Policy"
                          color="cyan"
                          onClick={(e) => _agreed(e)}
                        />
                      </span>
                    </div>
                    <div>
                      <Button
                        variant="filled"
                        size="md"
                        className="w-full bg-logocyan normal-case text-base font-normal flex justify-center items-center"
                        type="submit"
                        loading={loading}
                        disabled={loading}
                        // onClick={() => {setLoading(true)}}

                        onClick={_submit}
                      >
                        Sign up
                      </Button>
                      <div className="flex items-center justify-center text-center">
                        <p className="text-gray-600">
                          Already have an account?{" "}
                          <Link
                            to="/login"
                            className="text-logocyan hover:underline"
                          >
                            Login
                          </Link>
                        </p>
                      </div>

                      <div className="flex items-center justify-center text-center">
                        <p className="text-gray-600 mr-3">or sign up using</p>
                        <div className="flex space-x-2">
                          <img
                            src={GoogleIcon}
                            alt="Google Icon"
                            className="w-7 h-7 cursor-pointer"
                          />
                          <img
                            src={LinkedInIcon}
                            alt="LinkedIn Icon"
                            className="w-7 h-7 cursor-pointer"
                          />
                          <img
                            src={MicrosoftIcon}
                            alt="Microsoft Icon"
                            className="w-7 h-7 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex col-span-1 justify-center items-center">
          <div>
            <div className="bg-logocyan bg-opacity-20 min-h-[80vh] w-fit rounded-es-3xl flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mx-16">
                <h1 className="text-4xl font-semibold mb-5 tracking-wide text-nowrap my-20">
                  Join MonstarSuite
                </h1>
                <p className="text-lg mb-5 font-normal tracking-wide text-center text-gray-600">
                  Your all-in-one solution for seamless productivity. Streamline
                  tasks, unleash creativity, and elevate your workflow
                  effortlessly.
                </p>
                <img
                  src={SignupPageImage}
                  alt="Signup Page Image"
                  className="w-fit select-none pointer-events-none"
                />
              </div>
            </div>
            <div className="bg-logocyan bg-opacity-20 w-full rounded-ss-3xl mt-24 min-h-[9vh]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
