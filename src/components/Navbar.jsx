import React from "react";
import { useGoogleContext } from "./customContext";
import { navLinks } from "../allLinks";
import { FaSearch } from "react-icons/fa";
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ darkTheme, darkMode }) => {
  const { fetchGoogleData, searchTerm, setSearchTerm } = useGoogleContext();
  const location = useLocation();
  const navigate = useNavigate();

  const HandleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.split(" ").join("+");
    fetchGoogleData(location.pathname.substring(1), query);
    if (location.pathname === "/") {
      console.log("search item");
      navigate("/search");
    }
  };
  return (
    <header className="border-b-2 dark:border-gray-800">
      <nav className="md:container relative md:mx-auto pt-5 flex items-start justify-between">
        <a
          href="/"
          className="py-1 px-3 sm:px-4 md:font-bold md:text-lg tracking-widest text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl drop-shadow-2xl"
        >
          finder
          <span>
            <FaSearch
              className="searchIcon"
              style={{
                display: "inline",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "0.5rem",
              }}
            />
          </span>
        </a>

        <div className="flex-1 mx-5 sm:w-1/5">
          <form onSubmit={HandleSearchSubmit}>
            <input
              className="h-8 w-3/4 md:w-5/6 rounded-2xl px-5 outline-none dark:bg-gray-900 hover:border-blue-500 border hover:border-2"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search...."
            />
          </form>

          <ul className="md:w-[30rem] ml-5 mt-5 flex justify-between">
            {navLinks.map((link) => {
              return (
                <NavLink
                  to={link.name}
                  key={link.name}
                  className="pb-5 px-2 capitalize flex items-center hover:cursor-pointer border-b-2 border-transparent hover:border-b-blue-500 dark:hover:border-b-gray-100"
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              );
            })}
          </ul>
        </div>

        <button
          onClick={darkMode}
          className=" w-24 h-8 px-3 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 flex justify-around items-center rounded-2xl drop-shadow-xl dark:border "
        >
          {darkTheme ? "Light" : `Dark`}
          {darkTheme ? (
            <BsEmojiSunglasses className="ml-2 text-amber-300" />
          ) : (
            <BsFillMoonStarsFill className="ml-2 text-gray-900" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
