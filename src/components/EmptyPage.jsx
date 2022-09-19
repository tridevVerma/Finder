import React from "react";
import { FaSearch } from "react-icons/fa";

const EmptyPage = () => {
  return (
    <div
      style={{ width: "100%", height: "77vh" }}
      className="flex flex-col justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="flex items-center">
        <h1 className="text-6xl md:text-8xl font-bold">Finder</h1>
        <FaSearch className="text-6xl md:text-8xl ml-5" />
      </div>
      <p className="mt-5 text-sm md:text-lg tracking-widest">
        Search Info, News, Images and Videos
      </p>
    </div>
  );
};

export default EmptyPage;
