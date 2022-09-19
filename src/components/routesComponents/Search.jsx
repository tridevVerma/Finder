import React from "react";

const Search = ({ results, answers, setSearchTerm }) => {
  return (
    <div className="px-12 md:px-44 my-10 space-y-10">
      <div className="my-10 lg:absolute lg:top-32 lg:right-32">
        <h1 className="mb-5 text-2xl">{results && "People Also Ask : "}</h1>
        {answers?.map((ans, index) => {
          return (
            <p
              className="border-b border-t py-2 mb-5 border-gray-300 hover:cursor-pointer hover:text-blue-700 dark:hover:text-blue-300"
              key={index}
              onClick={() => setSearchTerm(ans)}
            >
              {ans}
            </p>
          );
        })}
      </div>
      {results?.map(({ title, link, description }, index) => {
        return (
          <div key={index}>
            <div className="w-3/5">
              <a href={link} rel="noreferrer">
                <p className="text-sm">
                  {link.length > 50 ? link.substring(0, 50) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
