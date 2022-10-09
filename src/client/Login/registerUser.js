
import React from "react";
import axios from 'axios';
const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const registerUser = (e) => {
    e.preventDefault();
  const user={
          name: name,
          email: email,
          password: password
        }
  axios
  .post('http://localhost:3001/registerUser', user)
    .then((response) => {
      console.log("hello");
      return response.json();
    });
  };
  return (
    <div>
      <div >
        <header >
          <img src="" alt="" />
          <h3 >Money Transfer App</h3>
          <h3 >Sign Up</h3>
        </header>
                <form class="form" onSubmit={registerUser}>
          <div>
          <label> USERNAME </label>
            <input
              type="text"
              placeholder="Username"
              
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
          <label> NAME </label>
            <input
              type="text"
              placeholder="Name"
              
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
          <label> EMAIL </label>
            <input
              type="email"
              placeholder="Email"
              
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
          <label> ADDRESS </label>
            <input
              type="text"
              placeholder="Address"
              
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
          <label> PASSWORD </label>
            <input
              type="password"
              placeholder="Password"
              
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
          <label> CONFIRM PASSWORD </label>
            <input
              type="password"
              placeholder="Password"
              
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Register
          </button>
        </form>
        <p>
          By Clicking the Sign Up button you are agree to our 
          <a href="#"> Terms and Conditions </a> and <a href="#"> Policy and Privacy </a>
        </p>
        <p>
          Already have an account? <a href="#"> Login here </a>
        </p>
        </div>
    </div>
  );
};

export default Register;
