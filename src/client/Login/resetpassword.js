import React from "react";

const Login = () => {
    return (
        <div>
            <div>
        <header>
          <img src="" alt="" />
          <h3>Reset Password</h3>
          
        </header>
            <div>
            <label> New Password </label>
            <input
              type="password"
              placeholder="Password"
            
            /> 
            </div>

            <div>
            <label> Confirm Password </label>
            <input
              type="password"
              placeholder="Password"
            
            /> 
            </div>
            <button  type="submit">
            Submit
            </button>
            
        </div>
        </div>
    ) 

}
export default Login;
