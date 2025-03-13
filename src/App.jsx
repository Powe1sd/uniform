import React from "react";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <>
        {" "}
        {/* Usando fragmentos */}
        <Hero />
        <Features />
      </>
      <Footer />
    </div>
  );
}

export default App;
