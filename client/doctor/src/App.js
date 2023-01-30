import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Appointment from "./components/appointment/Appointment";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import About from "./components/about/About";
import Error from "./components/Error";




export default function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/appointment/:doctorId" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );  
}
