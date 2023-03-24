import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

const PrivateRoutes=(props)=>{

    const{isAuth}= useContext(AuthContext);
    
    if(!isAuth){
        return <Navigate to="/login" />
    }
   return props.children;
}

export default PrivateRoutes;