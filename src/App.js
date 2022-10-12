import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./client/Login/registerUser";
import Login from "./client/Login/loginuser";

// import Reset from "./client/Login/resetpassword"
const App = () => {
  return (
    // <div>
    //   {/* <header> <Register/></header> */}
    //   <header> <Login/></header>
    //   {/* <header> <Reset/></header> */}
    // </div>
    <BrowserRouter>
      
      <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         {/* <Route path="/resetpassword" element={<Resetpassword />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
