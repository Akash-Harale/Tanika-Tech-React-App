import {Routes, Route} from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import {LoginForm} from "../pages/Login"
// import { SignupForm } from "../pages/Login"
import Users from "../pages/Users"
import ContactUs from "../pages/ContactUs"
import Products from "../pages/Products"
import PageNotFound from "../pages/PageNotFound"
import SingleUserPage from "../pages/SingleUserPage"
import PrivateRoutes from "./ProtectedRoutes"
import Documentation from "../pages/Documentation"


export default function AllRoutes(){
       return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/login" element={<LoginForm/>} />
                {/* <Route path="/signup" element={<SignupForm/>} /> */}
                <Route path="/users" element={<PrivateRoutes><Users/></PrivateRoutes>} />
                <Route path="/contactUs" element={<ContactUs/>} />
                <Route path="/users/:id" element={<SingleUserPage/>} />
                <Route path="*" element={<PageNotFound/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/documentation" element={<Documentation/>} />

                
            </Routes>
        </div>
       )
}