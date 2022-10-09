import "./App.css";
// import Register from "./client/Login/registerUser"
import Login from "./client/Login/loginuser"
import Reset from "./client/Login/resetpassword"
const App =()=> {
  return (
    <div>
      {/* <header> <Register/></header> */}
      <header> <Login/></header>
      {/* <header> <Reset/></header> */}
    </div>
  );
}

export default App;
