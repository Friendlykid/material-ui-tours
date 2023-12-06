import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar.jsx";
import Tour from "./pages/Tour.jsx";
import { useState } from "react";
import { tours } from "./data.js";

function App() {
  const [searchedData, setSearchedData] = useState(tours);
  return (
    <BrowserRouter>
      <SearchAppBar setSearchedData={setSearchedData} />
      <Routes>
        <Route path="/" element={<Home foundTours={searchedData} />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
