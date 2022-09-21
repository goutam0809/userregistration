import React from "react";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const registerUser = async (e) => {
    e.preventDefault();
   await fetch("http://localhost:3001/registerUser", {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
      },
      body:{
        name: name,
        email: email,
        password: password
      },
    }).then((response) => {
      console.log("hello");
      return response.json();
    });
  };
  return (
    <div>
      <div class="user">
        <header class="user__header">
          <img src="" alt="" />
          <h3 class="user__title">User Registeration Page</h3>
        </header>

        <form class="form" onSubmit={registerUser}>
          <div class="form__group">
            <input
              type="text"
              placeholder="Username"
              class="form__input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              class="form__input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              class="form__input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button class="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
