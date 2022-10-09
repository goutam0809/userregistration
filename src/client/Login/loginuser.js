import React from "react";

const Login = () => {
    return (
        <div>
            <div>
        <header>
          <img src="" alt="" />
          <h3>Login</h3>
          
        </header>
             <label> Email </label>
            <input
               type="email"
               placeholder="Email"
             
               />
            </div>


            <div>
            <label> Password </label>
            <input
              type="password"
              placeholder="Password"
              
            
            /> 
            </div>
            <button  type="submit">
            Login
            </button>
            <p>
          Fogot Password? <a href="#"> Click here </a>
        </p>
        </div>
    ) 

}
export default Login;
