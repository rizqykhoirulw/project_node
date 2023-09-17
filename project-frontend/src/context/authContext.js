import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthContex = ({children})=>{

    const [userTerkini, setUserTerkini] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async(input)=>{
        const res = await axios.post("http://localhost:8800/backend/auth/login", input, {withCredentials: true});
        const username = res.data.username;
        Cookies.set('access_token', res.data.token, { expires: 7, domain: 'localhost', path: '/', sameSite: 'None', secure: true });
        localStorage.setItem("username", JSON.stringify({ username }));
        setUserTerkini(res.data);
    }

    const logout = async(input)=>{
        await axios.post("http://localhost:8800/backend/auth/logout");
        localStorage.removeItem("username")
        setUserTerkini(null);
        
    }

    // useEffect(()=>{
    //     localStorage.setItem("user", JSON.stringify(userTerkini));
    // }, [userTerkini]);

    return(
        <AuthContext.Provider value={{userTerkini, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}