import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Header brand="GitHub Dossier" />
      <SearchBar />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
