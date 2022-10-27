import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const loginuser = (e) => {
      e.preventDefault();
      navigate("/customerdetails")
  } 
  return (
    <div>
      <div>
        <header>
          <img src="" alt="" />
          <h3>Login</h3>
        </header>
        <form  onSubmit={loginuser}>
          <div>
        <label> Email </label>
        <input type="email" placeholder="Email" />
      </div>

      <div>
        <label> Password </label>
        <input type="password" placeholder="Password" />
      </div>
      <button type="submit"> Login </button>
</form>
<p>
        
        Fogot Password? <a href="#"> Click here </a>
      </p>
      <p>
        Not a Registered User? <a href="/register"> Click here </a>
      </p>
      </div>
    </div>
  );
};
export default Login;
