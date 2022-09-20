import React, { createContext, useState, useContext } from "react";

const googleDataContext = createContext(null);

const baseURL = "https://google-search3.p.rapidapi.com/api/v1";

export const GoogleDataContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const fetchGoogleData = async (type, query) => {
    setIsLoading(true);

    let url = `${baseURL}/${type || "search"}/q=${query}&num=40`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });

    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  };

  return (
    <googleDataContext.Provider
      value={{ isLoading, results, fetchGoogleData, searchTerm, setSearchTerm }}
    >
      {children}
    </googleDataContext.Provider>
  );
};

export const useGoogleContext = () => useContext(googleDataContext);
