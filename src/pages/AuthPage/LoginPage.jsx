import { useContext, useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import NavbarLogin from "../../components/Navbar_Login";
import LoginPageImage from "../../assets/layout/LoginPageImage.png";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import { setLogin } from "../../redux/slices/loginSlice";
import {
  EyeIcon,
  EyeSlashIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/social/google.svg";
import LinkedInIcon from "../../assets/social/linkedin.svg";
import MicrosoftIcon from "../../assets/social/microsoft.svg";
import MonstarSuiteLogo from "../../assets/logo/MonstarSuiteWhite.png";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext";
import useIsLogin from "../../lib/hooks/isLogin";
import cookieCutter from 'cookie-cutter';
import cookiesNames from '../../utils/constant/Constant';
import * as CryptoJS from 'crypto-js';

const apiKey = import.meta.env.VITE_HOST;



var _email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function LoginPage() {
  const dispatch = useDispatch()
  const isLogin = useIsLogin()
  // const { user, isAuthenticated, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailFlag, setEmailFlag] = useState(false);
  const [passFlag, setPassFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [userField, setUserField] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    if(isLogin[0])
    window.location.href = "/" 
  },[isLogin[0]])

  const changeUserFieldHandler = (e) => {
    // tiashiit904@gmail.com
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

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    userField.email == "" ? setEmailFlag(true) : setEmailFlag(false);
    userField.password == "" ? setPassFlag(true) : setPassFlag(false);

    if (!error && userField.email != "" && userField.password != "") {
      setLoading(true);
      let option = {
        email: userField.email,
        password: userField.password,
      };
      dispatch(setLogin(option)).then(function (e) {
        setLoading(false);
        if(e.payload && e.payload.success)
        {
          const encrypted = CryptoJS.AES.encrypt(e.payload.access_token, apiKey).toString()
          cookieCutter.set(cookiesNames.HOW_THIS_MEASUREMENT_IS, encrypted) 
          window.location.href = "/";
        }
           
      });
    } else {
      setLoading(false);
    }

    // try {
    //   setError("");
    //   setLoading(true);
    //   console.log("User is authenticated");
    //   window.location.href = "/";
    // } catch {
    //   setError("Failed to log in");
    // }

    // setLoading(false);
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
              <h1 className="hidden lg:text-2xl font-medium mb-5 lg:flex lg:justify-start justify-center">
                Log in
              </h1>
              <div className="w-full space-y-5">
                <div className="space-y-8">
                  <Input
                  name = "email"
                    type="email"
                    label="Email"
                    size="lg"
                    className="bg-gray-100"
                    icon={<AtSymbolIcon className="text-gray-500" />}
                    shrink={true}
                    value={userField.email}
                    // onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: (error || emailFlag) && "red" }}
                    onChange={(e) => changeUserFieldHandler(e)}
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
                    value={userField.password}
                    // onChange={(e) => setPassword(e.target.value)}
                    style={{ borderColor: passFlag && "red" }}
                    onChange={(e) => changeUserFieldHandler(e)}
                  />
                </div>

                <div className="flex justify-between items-center text-sm text-nowrap gap-2">
                  <span className="-ml-3">
                    <Checkbox label="Remember me" color="deep-orange" />
                  </span>

                  <span>
                    <a href="#" className="text-suiteorange">
                      Forgot Password?
                    </a>
                  </span>
                </div>
                <div>
                  <Button
                    variant="filled"
                    size="md"
                    className="w-full bg-suiteorange normal-case text-base font-normal flex justify-center items-center"
                    type="submit"
                    loading={loading}
                    disabled={loading}
                    onClick={handleLogin}
                  >
                    Log in
                  </Button>
                </div>

                <div className="flex items-center justify-center text-center">
                  {/* Don't have an account? <a href="#" className="text-suiteorange">Sign up</a> */}
                  <p className="text-gray-600">
                    Don{"'"}t have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-suiteorange hover:underline"
                    >
                      Create new
                    </Link>
                  </p>

                  {/* or sign in using */}
                </div>

                <div className="flex items-center justify-center text-center">
                  <p className="text-gray-600 mr-3">or sign in using</p>
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
            </div>
          </div>
        </div>

        <div className="hidden lg:flex col-span-1 justify-center items-center">
          <div>
            <div className="bg-suiteorange bg-opacity-20 min-h-[80vh] w-fit rounded-es-3xl flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mx-16">
                <h1 className="text-4xl font-semibold mb-5 tracking-wide text-nowrap my-20">
                  Welcome to MonstarSuite
                </h1>
                <p className="text-lg mb-5 font-normal tracking-wide text-center text-gray-600">
                  Your all-in-one solution for seamless productivity. Streamline
                  tasks, unleash creativity, and elevate your workflow
                  effortlessly.
                </p>
                <img
                  src={LoginPageImage}
                  alt="Login Page Image"
                  className="w-fit select-none pointer-events-none"
                />
              </div>
            </div>
            <div className="bg-suiteorange bg-opacity-20 w-full rounded-ss-3xl mt-24 min-h-[9vh]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
