import {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';


export default function useIsLogin() {
    const [isLogin,setIsLogin] = useState(false)
    const data = useSelector((state) => state.loginReducer.isLogin)
    useEffect(() => {
        if(data){
            setIsLogin(true)
        }
        else
        setIsLogin(false) 
    },[data]);

    return [isLogin];
}
