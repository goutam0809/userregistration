import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");

  const registerUser = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      userEmail: userEmail,
      password: password,
      address: address,
    };
    axios
      .post("http://localhost:3001/registerUser", user)
      .then((response) => {
        navigate("/");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <header>
          <img src="" alt="" />
          <h3>Money Transfer App</h3>
          <h3>Sign Up</h3>
        </header>
        <form onSubmit={registerUser}>
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
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div>
            <label> ADDRESS </label>
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
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

          <button type="submit">Register</button>
        </form>
        <p>
          By Clicking the Sign Up button you are agree to our
          <button onClick={() => navigate("https://www.google.com/")}>
            {" "}
            Terms and Conditions{" "}
          </button>{" "}
          and <a href="#"> Policy and Privacy </a>
        </p>
        <p>
          Already have an account? <a href="#"> Login here </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
