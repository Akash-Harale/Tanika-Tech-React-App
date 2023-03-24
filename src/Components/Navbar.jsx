import { useContext } from "react";
import { NavLink, Navigate , useNavigate} from "react-router-dom";
import styles from "../AllCss/navbar.module.css";
import { AuthContext } from "./Context/AuthContext";
import { RxHamburgerMenu } from  "react-icons/rx";



export default function Navbar() {
 const Navigate= useNavigate()
  const {isAuth} =useContext(AuthContext)
  let links = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About" },
    { to: "/contactUs", title: "Contact Us" },
    { to: "/users", title: "Users" },
    { to: "/products", title:"Products"},
    { to: "/login", title: `${isAuth? `Logout` : "Login"}`},
    // { to: "" , title: "Logout"}
  ];

   const handleNavigate=()=>{
   Navigate("/documentation")
   }

  return (
    <div className={styles.mainDiv}>
      {/* <div style={{backgroundcolor:"#16181d"}} > <img width="50px" src="https://png.pngtree.com/element_pic/00/16/07/06577d261edb9ec.jpg" alt="" /> </div> */}
      <div className={styles.navbar}>
        <button style={{
     boxshadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
     backgroundColor: "#00D84A",
     color: "#fff",
     border: "none",
    padding: "0 30px",
     borderRadius: "5px",
     cursor: "pointer",
     hover: "black"
   }} onClick={()=> {Navigate("/")}}> <span >T</span>anika Tech</button>
        {links?.map((el) => {
          return (
            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.activeLink : styles.notActiveLink;
              }}
              to={el.to}
            >
              {" "}
              {el.title}{" "}
            </NavLink>
          );
        })}
        <button style={{
     
      backgroundColor: "red",
      color: "black",
      border: "none",
     
      borderRadius: "5px",
      cursor: "pointer",
      hover: "black"
    }} onClick={handleNavigate}>Documentation</button>
    
      </div>
      
    </div>
  );
}
