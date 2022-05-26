import React from "react";
import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Map from "./pages/Map";
import Services from "./pages/Services";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={Home}></Route>
          <Route path="/contactus" element={Contactus}></Route>
          <Route path="/map" element={Map}></Route>
          <Route path="/services" element={Services}></Route>
          <Route path="/Launch App" element={Signup}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;