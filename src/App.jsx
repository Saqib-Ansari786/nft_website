import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Collection from "./screens/Collection";
import Listing from "./screens/Listing";

function App({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}

export default App;
