import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import { GoogleDataContextProvider } from "./components/customContext";
import { Routes, Route, Navigate } from "react-router-dom";
import EmptyPage from "./components/EmptyPage";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const darkMode = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <GoogleDataContextProvider>
      <div className={darkTheme ? "dark" : ""}>
        <div className="flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} darkMode={darkMode} />
          <Routes className="grow">
            <Route path="/:type" element={<Results />} />
            <Route path="/" element={<EmptyPage />} />
            <Route path="/all" element={<Navigate to="/search" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </GoogleDataContextProvider>
  );
};

export default App;
