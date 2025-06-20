import { Navigate } from "react-router-dom"
import {jwtDecode} from "jwt-decode";

type JwtPayload = {
  exp: number;
};

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {

    const token = localStorage.getItem("authToken")

    if(!token){
        return <Navigate to="/Login"/>
    }

    try{
        const decode = jwtDecode<JwtPayload>(token);
        const currTime = Date.now()/1000;
        
        if(decode.exp < currTime){
            localStorage.removeItem("authToken");
            return <Navigate to="/Login"/>
        }
    }catch(err){
        console.log("token error : ", err);
        return <Navigate to="/Login"/>
    }
  return (
    <>{children}</>
  )
}

export default ProtectedRoute