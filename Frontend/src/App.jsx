import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar title="CiSTUP"/>
      <Home/>
      <Footer/>
      {/* <h1>CiSTUP IISc, Bengaluru</h1> */}
    </>
  );
}

export default App;