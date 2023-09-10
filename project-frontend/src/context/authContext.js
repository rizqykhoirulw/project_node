import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContex = ({children})=>{

    const [userTerkini, setUserTerkini] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async(input)=>{
        const res = await axios.post("http://localhost:8800/backend/auth/login", input, {withCredentials: true});
        const token = res.data.access_token;
        localStorage.setItem("token", JSON.stringify({ token }));
        setUserTerkini(res.data);
    }

    const logout = async(input)=>{
        await axios.post("http://localhost:8800/backend/auth/logout");
        localStorage.removeItem("token")
        setUserTerkini(null);
        
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(userTerkini));
    }, [userTerkini]);

    return(
        <AuthContext.Provider value={{userTerkini, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}