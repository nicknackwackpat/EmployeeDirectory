import React from 'react';
import './App.css';
import 'bootstrap';
import Header from "./components/Header";
import Search from "./components/Search";
import Users from "./components/Users";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Header />
      <Search />
      <Users />
    <Footer />
    </div>
  );
}

export default App;
