import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginPopup from "./LoginPopup";

export default function AuthLayout({children, authentication = true}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth?.status);

    useEffect(() => {
      if(authentication && authStatus !== authentication) { // user is not logged in
        return <LoginPopup />
      }
      else {
        navigate("/");
      }
      setLoader(false);
    }, [authStatus, navigate, authentication]);

    return loader ? <div className="w-screen h-screen flex justify-center items-center">Loading...</div> : <>{children}</>
    
}