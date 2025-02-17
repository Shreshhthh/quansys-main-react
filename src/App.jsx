import React, { useEffect } from "react";
import Home from "./Pages/Home";
import BookADemo from "./Pages/BookADemo";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
      </Routes>
    </div>
  );
};

export default App;
