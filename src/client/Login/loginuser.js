import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [userEmail,setUserEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
  const loginuser = (e) => {
      e.preventDefault();
      const userObj = {
        userEmail: userEmail,
        password:password,
      }
      axios.get("http://localhost:3001/loginUser", userObj).then(data =>{
        if (data.status === 200){
        navigate("/customerdetails")
        }else{
       console.log(data.msg);
        }
      }).catch(err =>{
        console.log(err);
      })
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
        <input type="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)}
 />
      </div>

      <div>
        <label> Password </label>
        <input type="password" placeholder="Password"onChange={(e) => setPassword(e.target.value)} />
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
