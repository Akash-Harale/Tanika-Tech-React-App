
import { createContext } from "react";
import { useState } from "react";

export const AuthContext= createContext();


const AuthContextProvider= (props)=>{
    
const[token, setToken] = useState("")
const[isAuth, setAuth]= useState(false)
    return (
        <AuthContext.Provider value={{token,setToken,isAuth,setAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider