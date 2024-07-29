import "./App.css";
import Footer from "./Components/GlobalComponents/Footer";
import NavBar from "./Components/GlobalComponents/NavBar";
import Home from "./Pages/Home";
import Login from "./Components/HomeComponent/Login";
import { Routes, Route } from "react-router-dom";
import Error from "./Components/GlobalComponents/Error";
import Signup from "./Components/HomeComponent/Signup";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
