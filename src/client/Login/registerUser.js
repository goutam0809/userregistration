import React from "react";
const registerUser = () =>{
  
  fetch('http://localhost:3000/registerUser', {
    method: 'Get',
  }).then((response)=> {
    console.log("hello")
    return response.json();
  });

}
const Register = () => {
  
  return <div><input type="text"></input>
  <button onClick={registerUser()}>Submit</button>
  </div>;
};



export default Register;
