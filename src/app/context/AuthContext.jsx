"use client"

import React, { createContext, useContext, useState, useEffect} from "react";
import { useFetchWithInterceptors } from "../../lib/fetch";
import { setCookie } from "@/utils/cookies";

export const AuthContext = createContext({})

const AuthProvider = ({children}) =>{

    const [user, setUser] = useState({});
    // const [loading, setLoading] = useState()
    const { data, loading, error } = useFetchWithInterceptors("/auth/me", {
        method: "GET"
    });

    
    const fetchUser = async () => {
      if (!loading) {
        if (error) {
          // Handle error, e.g., redirect to login page
          console.error("Error fetching user:", error);
        } else if (data) {
          setUser(data);
          console.log(data)
          setCookie(data.access_token)
        }
      }
    };

//    useEffect(() => {

//      fetchUser();
//    }, []);




    return <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>

}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}
