import React, { useContext, useState } from 'react';
 import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContext';

import './LoginForm.css';
import './SignupForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuth ,setAuth,setToken,}=useContext(AuthContext)
  const Nevigate=useNavigate()
  


  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData={
      email, password
    }
              
    fetch("https://reqres.in/api/login",{
      method:"POST",
      body:JSON.stringify(userData),
      headers: {"Content-Type" : "application/json"}
    })
    .then((res)=>{
       if(res.status===200)
       {
         setAuth(true)
         Nevigate('/')

       }
       return res.json()
    }).then((authtoken)=>{
      // console.log(authtoken)
      setToken(authtoken.token)
      
    })
   

   
  };

//  console.log("auth" ,isAuth)

  return  isAuth?<button style={{
      margin:"0 auto",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
    }} onClick={()=>setAuth(false)}>Logout</button>: (
   
    <>
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={handleUsernameChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Log in</button>
    </form>
    <div style={{border:"1px solid gray", textAlign:"center", width:"31%", margin:"auto", marginTop:"50px", borderRadius:"10px", padding:"30px"}}>
        <h2>Login credentials </h2>
        <p>Email- eve.holt@reqres.in</p>
        <p>Password- cityslicka</p>
        
      </div>
    </>
  );
};



// const SignupForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle form submission logic
//   };

//   return (
//     <div style={{width:"600px"}}>
//       <form onSubmit={handleSubmit} className="signup-form">
//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//           className="form-control"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           className="form-control"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="confirm-password">Confirm password:</label>
//         <input
//           type="password"
//           id="confirm-password"
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//           className="form-control"
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">Sign up</button>
//     </form>
//     <div>
//       <Footer/>
//     </div>
//     </div>
//   );
// };

export { LoginForm };

