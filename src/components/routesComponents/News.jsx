import React from "react";

const News = ({ results }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-10 gap-x-10 my-5 px-16 md:px-32">
      {results?.map(({ links, id, source, title, published }) => {
        return (
          <div key={id}>
            <a
              href={links?.[0].href}
              target="_blank"
              rel="noreferrer"
              className="text-lg dark:text-blue-300 text-blue-700 hover:underline"
            >
              {title}
            </a>
            <div className="flex gap-4">
              <a href={source?.href} target="_blank" rel="noreferrer">
                {source?.href}
              </a>
            </div>
            <p className="text-sm mt-2 text-gray-400 dark:text-gray-500">
              {published.substring(0, 25)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default News;
